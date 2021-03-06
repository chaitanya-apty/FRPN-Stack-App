interface AuthUser {
    id: number;
    email: string;
    is_active: boolean;
    password: string;
}

export interface TokenState {
    token: string;
    set: (token: string) => void;
    get: () => string;
    clear: () => void;
}

export type PAuthUser = Partial<AuthUser>;