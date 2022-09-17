

  export interface BookDetails {
    responseCode: string
    responseData: ResponseDaum[]
    responseMsg: string
  }

  export interface ResponseDaum {
    title: string
    authorId: string
    publisherId: string
    publication: Publication
    author: Author
    publisher: Publisher
    id: string
    created: string
    updated: any
    isDeleted: boolean
  }

  export interface Publication {
    edition: number
    year: number
  }

  export interface Author {
    name: string
    books: any[]
    id: string
    created: string
    updated: any
    isDeleted: boolean
  }

  export interface Publisher {
    name: string
    books: any[]
    id: string
    created: string
    updated: any
    isDeleted: boolean
  }
