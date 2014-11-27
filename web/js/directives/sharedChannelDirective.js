/**
 * @file
 * Contains channel directives.
 */

/**
 * Shared channel preview directive. Displays the channel preview.
 * Has a play button.
 * When pressing the channel, but not the play button, redirect to the channel editor.
 */
ikApp.directive('ikSharedChannel', ['$interval', '$location',
  function($interval, $location) {
    return {
      restrict: 'E',
      scope: {
        ikWidth: '@',
        ikChannel: '=',
        ikSingleSlide: '='
      },
      link: function(scope, element, attrs) {
        scope.slideIndex = 0;
        scope.playText = '';

        // Observe on changes to ik-slide, for when it is set.
        attrs.$observe('ikChannel', function(val) {
          if (!val) {
            return;
          }

          // If channel is empty, display empty channel.
          if (scope.ikChannel.slides.length <= 0) {
            scope.templateURL = 'partials/channel-sharing/empty.html';
          }
          else {
            scope.templateURL = 'partials/channel-sharing/non-empty.html';

            scope.buttonState = 'play';
          }
        });

        /**
         * Start playing the slides.
         */
        scope.play = function() {
          if (angular.isDefined(scope.interval)) {
            $interval.cancel(scope.interval);
            scope.interval = undefined;
            scope.buttonState = 'play';
          } else {
            scope.slideIndex = (scope.slideIndex + 1) % scope.ikChannel.slides.length;

            scope.interval = $interval(function() {
              scope.slideIndex = (scope.slideIndex + 1) % scope.ikChannel.slides.length;
            }, 2000);
            scope.buttonState = 'pause';
          }
        };

        /**
         * Redirect to the channel editor page.
         */
        scope.redirectToChannel = function() {
          if(scope.ikSingleSlide != true) {
            $location.path("/channel-shared/" + scope.ikChannel.id);
          }
        };

        // Register event listener for destroy.
        //   Cleanup interval.
        scope.$on('$destroy', function() {
          if (angular.isDefined(scope.interval)) {
            $interval.cancel(scope.interval);
            scope.interval = undefined;
          }
        });
      },
      templateUrl: '/partials/channel-sharing/shared-channel-template.html'
    }
  }
]);