export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpResponse {
    message: string;
    user: {
      user_id: string;
      username: string;
      email: string;
      profilePicture: string;
      createdAt: string;
      updatedAt: string;
    };
  }
  
export interface SignInResponse {
    message: string;
    user: {
      id: string;
      username: string;
      email: string;
      profilePicture: string;
    };
  }