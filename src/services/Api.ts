const users: Array<{login: string, password: string, name: string}> = [
    {
        login: 'admin',
        password: '000000',
        name: 'Barly Vallentido',
    },
];

type LoginResult = {
    success: boolean,
    name?: string,
    login?: string
}

const login = (login: string, password: string): Promise<LoginResult> => {
    return new Promise((resolve) => {
        let isValid = false;
        for (const user of users) {
            if (user.login === login && user.password === password) {
                isValid = true;
                resolve({
                    success: true,
                    name: user.name,
                    login: login,
                });
            }
        }

        if (!isValid) {
            resolve({ success: false });
        }
    });
};

export { login };
