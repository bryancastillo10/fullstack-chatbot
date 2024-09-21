export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInRequest {
  username: string;
  password: string;
}

export interface AuthSuccessResponse {
    message?: string;
    user?: {
      user_id: string;
      username: string;
      email: string;
      profilePicture: string;
      createdAt: string;
      updatedAt: string;
    };
    error?:string;
  }
export interface LogoutResponse {
    message: string;
  }
export interface AuthError {
  status?:number;
  data?:{
    error?:string;
  }
}