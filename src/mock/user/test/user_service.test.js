const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');

// mock class
jest.mock('../user_client.js');

describe('UserService', () => {

    // mock function
    const login = jest.fn(async () => 'success');

    // set mock fucntion to the mockImplementation
    UserClient.mockImplementation(() => {
        return {
            login,
        };
    });

    let userService;
    beforeEach(() => {
        userService = new UserService(new UserClient());
    });


    it('calls login() on UserClient when tries to login', async () => {
        await userService.login('id', 'password');

        expect(login.mock.calls.length).toBe(1);
    })


    it('should not call login() on UserClient again if already logged in', async () => {
        await userService.login('id', 'password');
        await userService.login('id', 'password');

        expect(login.mock.calls.length).toBe(1);
    })
});