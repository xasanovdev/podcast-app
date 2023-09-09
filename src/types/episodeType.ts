export interface EpisodePropsType {
  id: number;
  title: string;
  text: string;
  imgUrl: string;
  tags: string[];
  socials: {
    googlePodcast?: string;
    spotify?: string;
    youtube?: string;
  };
}
