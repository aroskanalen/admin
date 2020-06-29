# Aroskanalen CHANGELOG

## 6.3.0

* Upgraded bundles:
  - aakb/os2display-aarhus-template -> 1.2.0
  - itk-os2display/aarhus-second-template-bundle -> 1.4.1
  - itk-os2display/poster-bundle -> 1.2.1
  - os2display/admin-bundle -> 2.2.1
  - os2display/core-bundle -> 2.2.3
  - os2display/screen-bundle -> 1.1.6

## 6.2.4

* Upgraded bundles:
  - itk-os2display/aarhus-second-template-bundle -> 1.3.0
  - os2display/default-template-bundle -> 2.2.0
  - os2display/template-extension-bundle -> 2.1.0
  - symfony/symfony -> v3.4.42

## 6.2.3

* Upgraded bundles:
  - aakb/os2display-aarhus-templates -> 1.1.1
  - itk-os2display/os2display-koba-integration -> 1.1.3
  - symfony/symfony -> v3.4.41

## 6.2.2

* Upgraded bundles:
  - os2display/core-bundle -> 2.2.2

## 6.2.1

* Upgraded bundles:
  - os2display/core-bundle -> 2.2.1
  - os2diplsay/screen-bundle -> 1.1.5
  - symfony/symfony -> 3.4.39
  - twig/twig -> v2.12.5

## 6.2.0

* Upgraded bundles:
  - os2display/admin-bundle -> 2.2.0
  - os2display/core-bundle -> 2.2.0
  - os2display/default-template-bundle -> 2.1.0

## 6.1.0

* Added sparkle-feed-bundle.

## 6.0.7

* Updated bundles:
  - itk-os2display/os2display-koba-integration -> 1.1.2
  - os2display/admin-bundle -> 2.1.3

## 6.0.6

* Updated bundles:
  - os2display/admin-bundle -> 2.1.2
  - os2display/core-bundle -> 2.1.3
  - os2display/screen-bundle -> 1.1.4

## 6.0.5

* Fixed job queue issue.

## 6.0.4

* Added UTC fix to AppKernel.

## 6.0.3

* Updated bundle.

## 6.0.2

* Updated bundles.

## 6.0.1

* Updated bundles.
* Fixed issues with fallback_image and screen-bundle.

## 6.0.0

* Upgraded to Symfony 3.4.

## 5.2.4

* symfony/symfony -> v2.8.51.
* itk-os2display/aarhus-second-template-bundle -> 1.1.9

## 5.2.3

* itk-os2display/aarhus-second-template-bundle -> 1.1.8

## 5.2.2

* itk-os2display/aarhus-second-template-bundle -> 1.1.7

## 5.2.1

* aakb/os2display-aarhus-templates: 1.0.20

## 5.2.0

* itk-os2display/campaign-bundle -> os2display/campaign-bundle
* os2display/campaign-bundle: 1.3

## 5.1.15

* Added youtube bundle.

## 5.1.14

* os2display/core-bundle -> 1.2.0
* itk-os2display/campaign-bundle -> 1.1.0
* symfony/symfony -> v2.8.48

## 5.1.13

* itk-os2display/vimeo-bundle -> 1.0.6

## 5.1.12

* itk-os2display/lokalcenter-template-bundle -> 1.0.7
* symfony/symfony -> v2.8.47

## 5.1.11

* itk-os2display/vimeo-bundle -> 1.0.5

## 5.1.10

* itk-os2display/vimeo-bundle -> 1.0.4

## 5.1.9

* symfony/symfony -> v2.8.46
* os2display/core-bundle -> 1.1.5

## 5.1.8

* os2display/admin-bundle -> 1.1.3
* os2display/core-bundle -> 1.1.4
* os2display/default-template-bundle -> 1.0.12

## 5.1.7

* itk-os2display/aarhus-second-template-bundle -> 1.1.6
* os2display/admin-bundle -> 1.1.2
* symfony/symfony -> v2.8.45
* os2display/core-bundle -> 1.1.3

## 5.1.6

* os2display/default-template-bundle -> 1.0.11.

## 5.1.5

* symfony/symfony -> 2.8.44.

## 5.1.4

* itk-os2display/core-bundle -> 1.1.2

## 5.1.3

* symfony/symfony -> 2.8.41
* itk-os2display/vimeo-bundle -> 1.0.3
  - Changed js code to avoid reinitializing vimeo player.
  - Removed os2display requirements.
* itk-os2display/template-extension-bundle -> 1.1.14
  - Made selected tools configurable.
  - Removed os2display requirements.
* itk-os2display/os2display-koba-integration -> 1.0.6
  - Removed os2display requirements.
* itk-os2display/lokalcenter-template-bundle -> 1.0.6
  - Removed os2display requirements.
* itk-os2display/default-template-bundle -> 1.0.10
  - Removed os2display requirements.
* itk-os2display/campaign-bundle -> 1.0.1
  - Made save button sticky.
  - Fixed error messages.
  - Added call to middleware to get which channels are in the middleware to make sure it matches the backend.
  - Added watch parameter to datetime pickers.
  - Changed blameable user field from string to reference.
  - Removed os2display requirements.
* itk-os2display/admin-bundle -> 1.1.1
  - Made media upload buttons sticky.
  - Fixed datetime pickers.
  - Removed os2display requirements.
* itk-os2display/aarhus-second-template-bundle -> 1.1.5
  - Removed os2display requirements.
* itk-os2display/aarhus-data-bundle -> 1.2.2
  - Removed os2display requirements.
* itk-os2display/core-bundle -> 1.1.1
  - Fixed issue where shared channel was not serialized correctly, resulting in a blocked screen-timeline overview.
* aakb/os2display-aarhus-templates -> 1.0.19
  - Changed 3 text fields in book template to one rich text area.

## 5.1.2

* itk-os2display/aarhus-second-template-bundle 1.1.1 -> 1.1.2
  - Style changes.

## 5.1.0

* Added campaign feature (itk-os2display/campaign-bundle 1.0.0).
* itk-os2display/core-bundle 1.0.14 -> 1.1.0:
  - Fixed behat features
  - Added viewable_groups to apiData.
* itk-os2display/admin-bundle 1.0.14 -> 1.1.0:
  - Added itk-header to allow injections into pages for decoupled bundles.
  - Made datepicker configurable.
  - Moved BaseApiController to mainModule.
  - Removed unused call to get all channels in slide create.
  - Moved shared components from ikApp to the module ikShared, so it can be injected in other apps.

## 5.0.13

* itk-os2display/aarhus-second-template-bundle 1.1.0 -> 1.1.1
  - Fixed sensor templates.

## 5.0.12

* Enabled vimeo bundle.

## 5.0.11

* aakb/os2display-aarhus-templates: 1.0.12 -> 1.0.18
  - Changed coming-events header styling.
  - Changed gulp sass paths.
  - Fixed jshint gulp package issue.
  - Added description to dokk1-book-review image picker.
  - Removed unused is-preview class.
  - Updated npm packages.
  - Changed text.
  - Fixed styling for book template.
  - Changed template name.
  - Added dokk1-book-review template.
* itk-os2display/aarhus-data-bundle: 1.0.2 -> 1.2.1
  - Changed data functions to only be CKAN url or untreated url.
  - Added caching of results.
* itk-os2display/aarhus-second-template-bundle: 1.0.3 -> 1.1.0
  - Added icons to 4 sensor template.
  - Added sensor-history template.
  - Updated npm packages.
  - Added max duration to number counter.
* itk-os2display/template-extension-bundle: 1.1.7 -> 1.1.13
  - Added classes.
  - Added description to fields.
  - Changed button styling to remove border.
  - Removed modal close on media upload for itk-media-picker.
  - Updated npm packages.
  - Fixed itk-media-picker styling.
  - Added remove media button itk-media-picker.
  - Added itk-media-picker for selecting configurable amount off media.
* itk-os2display/vimeo-bundle: 1.0.2
  - Added vimeo video template.
* itk-os2display/admin-bundle: 1.0.12 -> 1.0.14
  - Fixed issue with missing slide/screen templates.
  - Fixed submenu code to activate sub menu based on first part of path.
  - Fixed active-filter for admin/users and admin/groups.
  - Updated npm packages.
* itk-os2display/default-template-bundle: 1.0.7 -> 1.0.9
  - Fixed image paths (especially slideshow icon).
  - Updated npm packages.

## 5.0.10

* Updated aarhus-second-template-bundle to fix issues with countdown.

## 5.0.9

?

## 5.0.8

* Updated default-template-bundle to fix issue with slideshow positioning.

## 5.0.7

* Updated lokalcenter-template-bundle to fix issue.

## 5.0.6

* Added lokalcenter-template-bundle.
* Added aarhus-second-template-bundle.
* Added aarhus-data-bundle.
* Added template-extension-bundle.
* Added script to update custom bundles.
* Updated custom bundles.

## 5.0.5

* Updated default-template-bundle.

## 5.0.4

* Updated core-bundle to 1.0.12. Fixes video encoding.

## 5.0.3

* Updated core-bundle to 1.0.11. Fixes shared channel issue.
* Updated admin-bundle to 1.0.10. Adds ngSanitize.

## 5.0.2

* Fixed missing KobaIntegrationBundle routing.

## 5.0.1

* Upgraded to 5.x structure.
* Added migration to fix types from ik_grouping
