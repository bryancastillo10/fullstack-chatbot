type User = {
  user_id: string;
  username: string;
  email: string;
  password: string;
  role: string;
  profilePicture: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface UpdateProfileInfoResponse {
  message: string;
  profilePicture?: string;
  user?: User;
}

export type UpdateProfileInfoRequest = Pick<
  User,
  "username" | "email" | "password"
>;

export interface UpdateProfilePictureRequest {
  id: string;
  file: File;
}

export interface DeleteProfileResponse {
  message: string;
  deletedProfile: User;
}
