// List of articles
interface Category {
    name: string;
    slug: string;
}
interface IArticlesData {
    title: string;
    slug: string;
    category: Category;
}
export interface IArticles {
    articles: IArticlesData[];
}


// Single Article
interface ImageData {
    url: string;
} 
interface Author {
    name: string;
    email: string;
} 
interface IArticleData {
    title: string;
    content: string;
    published_at: string;
    image: ImageData;
    author: Author;
}
export interface IArticle {
    articles: IArticleData[];
}