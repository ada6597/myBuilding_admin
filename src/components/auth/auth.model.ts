export interface IStatus {
  status: "idle" | "loading" | "failed" | "fulfilled" | "pending" | "rejected";
}

export interface ISigninPayload {
  username: string;
  password: string;
}
export interface IAuthuser extends IStatus {
  userStatus: string;
  isUserLoggedIn: boolean;
}
