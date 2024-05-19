export interface JwtService {
  generateToken(): void;
  refreshToken(): void;
  validateToken(): void;
}
