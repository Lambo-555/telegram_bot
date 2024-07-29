interface IScene {
    leave(): void;
}

interface IMainScene {
    goToMarketScene(): void; // -> scene "market"
    goToCabinetScene(): void; // -> scene "cabinet"
    goToHelpScene(): void; // -> scene "cabinet"
}

interface IMarketScene {
    getTestList(): void; // with pagination
}

interface ICabinetScene {
    getUserInfo(): void;
    getWallet(): void;
    addWallet(): void;
    removeWallet(): void;
}

interface IHelpScene {
    getHelp(): void; // with pagination
    getContacts(): void; // with pagination
}

enum UserRoleEnum {
    'casual',
    'expert',
    'admin',
}

interface IUser {
    id: string;
    role: UserRoleEnum;
    telegram_id: number;
    name: string;
}

interface IWallet {
    id: string;
    user_id: string;
    pay_system: string;
    amount: number;
}

interface IProgress {
    id: string;
    test_id: string;
    date: Date;
}

interface ITests {
    id: string;
    name: string;
    about: string;
    price: number; /// rub
}

interface IQuestions {
    id: string;
    test_id: string;
    name: string;
    about?: string;
}

interface IAnswers {
    id: string;
    question_id: string;
    name: string;
    is_right: boolean;
    points: number;
}
