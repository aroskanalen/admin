#!/usr/bin/env bash
bold=$(tput bold)
normal=$(tput sgr0)

base_dir=$(cd $(dirname "${BASH_SOURCE[0]}")/../ && pwd)

cd $base_dir

mkdir packages
cd packages

function clone_latest {
  git clone --branch=master git@github.com:$GIT_ORGANIZATION/$1.git

  cd $1

  latesttag=$(git describe --tags)
  echo checking out ${latesttag}
  git checkout ${latesttag}

  cd ..
}

##### os2display     #####

mkdir os2display
cd os2display

GIT_ORGANIZATION=os2display

BUNDLES="admin-bundle
campaign-bundle
core-bundle
default-template-bundle
media-bundle
screen-bundle
template-extension-bundle
vimeo-bundle"

for BUNDLE in $BUNDLES
do
(
    clone_latest $BUNDLE
)
done

cd ..

##### sparkle-feed-bundle #####

GIT_ORGANIZATION=itk-os2display

cd os2display

clone_latest sparkle-feed-bundle

cd ..

##### itk-os2display #####

mkdir itk-os2display
cd itk-os2display

GIT_ORGANIZATION=itk-os2display

BUNDLES="aarhus-data-bundle
aarhus-second-template-bundle
lokalcenter-template-bundle
os2display-koba-integration
poster-bundle"

for BUNDLE in $BUNDLES
do
(
    clone_latest $BUNDLE
)
done

cd ..


##### aakb #####

mkdir aakb
cd aakb

GIT_ORGANIZATION=aakb

clone_latest os2display-aarhus-templates

cd ..
cd ..
