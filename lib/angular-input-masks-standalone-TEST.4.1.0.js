/*

    The MIT License (MIT)

    Copyright (c) 2015 Igor Rafael

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

*/
  
  var m = angular.module('ui.utils.masks.global', [])
    .directive('uiCreditCardMask', require('./credit-card/credit-card'))
    .directive('uiDateMask', require('./date/date'))
    .directive('uiMoneyMask', require('./money/money'))
    .directive('uiNumberMask', require('./number/number'))
    .directive('uiPercentageMask', require('./percentage/percentage'))
    .directive('uiScientificNotationMask', require('./scientific-notation/scientific-notation'))
    .directive('uiTimeMask', require('./time/time'));

  var validators = require('../../helpers/validators');
  var NumberMasks = require('../../helpers/number-mask-builder');
  var PreFormatters = require('../../helpers/pre-formatters');
  
  function preparePercentageToFormatter(value, decimals, modelMultiplier) {
    return PreFormatters.clearDelimitersAndLeadingZeros((parseFloat(value)*modelMultiplier).toFixed(decimals));
  }
  
  function PercentageMaskDirective($locale) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {
        var decimalDelimiter = $locale.NUMBER_FORMATS.DECIMAL_SEP;
  
        var backspacePressed = false;
        element.bind('keydown keypress', function(event) {
          backspacePressed = event.which === 8;
        });
  
        var thousandsDelimiter = $locale.NUMBER_FORMATS.GROUP_SEP;
        if (angular.isDefined(attrs.uiHideGroupSep)) {
          thousandsDelimiter = '';
        }
  
        var percentageSymbol = ' %';
        if (angular.isDefined(attrs.uiHidePercentageSign)) {
          percentageSymbol = '';
        } else if (angular.isDefined(attrs.uiHideSpace)) {
          percentageSymbol = '%';
        }
  
        var decimals = parseInt(attrs.uiPercentageMask);
        if (isNaN(decimals)) {
          decimals = 2;
        }
  
        var modelValue = {
          multiplier : 10000,   // # IMPORTANT
          decimalMask: 0        // # IMPORTANT
        };
        if (angular.isDefined(attrs.uiPercentageValue)) {
          modelValue.multiplier  = 1;
          modelValue.decimalMask = 0;
        }
  
        var numberDecimals = decimals + modelValue.decimalMask;
        var viewMask = NumberMasks.viewMask(decimals, decimalDelimiter, thousandsDelimiter),
          modelMask = NumberMasks.modelMask(numberDecimals);
  
        function formatter(value) {
          if (ctrl.$isEmpty(value)) {
            return value;
          }
          var prefix = (angular.isDefined(attrs.uiNegativeNumber) && value < 0) ? '-' : '';
          var valueToFormat = preparePercentageToFormatter(value, decimals, modelValue.multiplier);
          var formatedValue = prefix + viewMask.apply(valueToFormat) + percentageSymbol;
  
          return formatedValue;
        }
  
        function parser(value) {
          console.log('parser');

          if (ctrl.$isEmpty(value)) {
            return null;
          }
  
          var valueToFormat = PreFormatters.clearDelimitersAndLeadingZeros(value) || '0';
          if (percentageSymbol !== '' && value.length > 1 && value.indexOf('%') === -1) {
            valueToFormat = valueToFormat.slice(0, valueToFormat.length - 1);
          }
  
          if (backspacePressed && value.length === 1 && value !== '%') {
            valueToFormat = '0';
          }
  
          var formatedValue = viewMask.apply(valueToFormat) + percentageSymbol;
          var actualNumber = parseFloat(modelMask.apply(valueToFormat)) * modelValue.multiplier; // # IMPORTANT

          // https://github.com/assisrafael/angular-input-masks/issues/334
          if (isNaN(actualNumber)) {
            actualNumber = parseFloat(modelMask.apply(value.replace(/[^0-9]/g,'')))
            valueToFormat = PreFormatters.clearDelimitersAndLeadingZeros(value) || '0'
            formatedValue = viewMask.apply(valueToFormat) + percentageSymbol;
          }
          // _____________________________________________________________
  
          if (angular.isDefined(attrs.uiNegativeNumber)) {
            var isNegative = (value[0] === '-'),
              needsToInvertSign = (value.slice(-1) === '-');
  
            //only apply the minus sign if it is negative or(exclusive) or the first character
            //needs to be negative and the number is different from zero
            if ((needsToInvertSign ^ isNegative) || value === '-') {
              actualNumber *= -1;
              formatedValue = '-' + ((actualNumber !== 0) ? formatedValue : '');
            }
          }
  
          if (ctrl.$viewValue !== formatedValue) {
            ctrl.$setViewValue(formatedValue);
            ctrl.$render();
          }
  
          return actualNumber;
        }
  
        ctrl.$formatters.push(formatter);
        ctrl.$parsers.push(parser);
  
        if (attrs.uiPercentageMask) {
          console.log('1');

          scope.$watch(attrs.uiPercentageMask, function(_decimals) {
            console.log('2');

            decimals = isNaN(_decimals) ? 2 : _decimals;
  
            numberDecimals = decimals + modelValue.decimalMask;
            viewMask = NumberMasks.viewMask(decimals, decimalDelimiter, thousandsDelimiter);
            modelMask = NumberMasks.modelMask(numberDecimals);
  
            parser(formatter(ctrl.$modelValue));
          });
        }
  
        if (attrs.min) {
          var minVal;
  
          ctrl.$validators.min = function(modelValue) {
            return validators.minNumber(ctrl, modelValue, minVal);
          };
  
          scope.$watch(attrs.min, function(value) {
            minVal = value;
            ctrl.$validate();
          });
        }
  
        if (attrs.max) {
          var maxVal;
  
          ctrl.$validators.max = function(modelValue) {
            return validators.maxNumber(ctrl, modelValue, maxVal);
          };
  
          scope.$watch(attrs.max, function(value) {
            maxVal = value;
            ctrl.$validate();
          });
        }
      }
    };
  }
  PercentageMaskDirective.$inject = ['$locale']
