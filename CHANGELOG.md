# Aroskanalen CHANGELOG

## 5.1.3

* symfony/symfony -> 2.8.39
* itk-os2display/vimeo-bundle -> 1.0.3
* itk-os2display/template-extension-bundle -> 1.1.14
* itk-os2display/os2display-koba-integration -> 1.0.6
* itk-os2display/lokalcenter-template-bundle -> 1.0.6
* itk-os2display/default-template-bundle -> 1.0.10
* itk-os2display/campaign-bundle -> 1.0.1
* itk-os2display/admin-bundle -> 1.1.1
* itk-os2display/aarhus-second-template-bundle -> 1.1.5
* itk-os2display/aarhus-data-bundle -> 1.2.2

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
