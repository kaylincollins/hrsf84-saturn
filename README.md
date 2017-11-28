# PicVoyage

> Visualize your dream vacation scrapbook with PicVoyage. PicVoyage will allow users to plan their next trip based off of past travelers photos. Photos for restaurants and sights will be displayed and users can save them to their idea journal. In the journal, the photo will save location information and name information based on the instagram photo. Users will easily be able to locate insta-worthy places for their next adventure. 

## Team

  - Katherine Fickel
  - Dustin Huang
  - Kaylin Collins

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

> Click on a photo or enter city in the search bar. Browse the photos related to the city and click the photo to save to the current voyage list. Once you have browsed to your liking, save the voyage by clicking the save button. Easily access all saved voyages by clicking on the book icon. Click-save-enjoy.

## Requirements

- Node 6.4.x
- Mongoose
- MongoDB
- React-masonry
- React-router
- Webpack
- Babel
- Google API
- Yelp API


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## Setting local variables

-API:
	-Sign up for Yelp Fusion API. In your terminal add the following variables with your information:
		-export CLIENTID=Your-client-id
		-export CLIENTSECRET=Your-client-secret

-Database 
	-Set your config variable to log in to your database
		-for example, we used mLab and set a variable like this:
		export <dbuser>=<password>:saturn@ds040877.mlab.com:40877/<dbname>

### Roadmap

View the project roadmap [here](https://docs.google.com/document/d/1OO5z6kTTVBHrAS6XR9YJxTN1Wtyx_mXapDGT4LDZgmw/edit)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
