export interface LoginRequest {
    login: string;
    senha: string;
  }
  
  export interface LoginResponse {
    success: boolean;
    msg: string;
    id_usuario?: number;
    nome?: string;
    token?: string;
    token_session?: string;
  }