export interface ArticlePropsType {
  id: number;
  title: string;
  subtitle: string;
  type: string;
  tag: string[];
  imgUrl: string;
  date: string;
  socials: {
    googlePodcast?: string;
    spotify?: string;
    youtube?: string;
  };
}
