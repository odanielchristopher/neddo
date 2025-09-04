export type Invitation = {
  id: string;
  link: string;
  organization: {
    imagePath: string | null;
    name: string;
  };
};
