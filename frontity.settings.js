const settings = {
  "name": "awsm-project",
  "state": {
    "frontity": {
          "url": "https://www.oddinteractive.it/wpsite/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/contattaci/"
            ],
            [
              "Travel",
              "/?page_id=2/"
            ],
            [
              "Japan",
              "/?page_id=49/"
            ],
            [
              "Contattaci",
              "/?page_id=108/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
              "url": "https://www.oddinteractive.it/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
