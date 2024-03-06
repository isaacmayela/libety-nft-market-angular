class UsefulFeatures{

    static categoriesItemsElements () {
        const objList = [
          { id:1, source: "assets/images/icon-01.png", description: 'Blockchaine' },
          { id:2, source: "assets/images/icon-02.png", description: 'Digital Art' },
          { id:3, source: "assets/images/icon-03.png", description: 'Musique Art' },
          { id:4, source: "assets/images/icon-04.png", description: 'Visual World' },
          { id:5, source: "assets/images/icon-05.png", description: 'Valuable' },
          { id:6, source: "assets/images/icon-06.png", description: 'Triple NFT' }
        ]

        return objList
    };

    static collectionsItemsElements () {
        const objList = [
          {id:1, title: "Bored Ap Kennel Club", collection: "100/200", category: "Blockchain"},
          {id:2, title: "World Wide ArtGroup", collection: "98/200", category: "Visual Art"},
          {id:3, title: "Bored Ap Kennel Club", collection: "160/300", category: "Digital Crypto"}
        ]

        return objList
    }

    static changeScrollBarState () {

    }
}

export default UsefulFeatures
