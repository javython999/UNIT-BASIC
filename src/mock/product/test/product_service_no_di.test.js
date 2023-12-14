const ProductService = require('../product_service_no_di');
const ProductClient = require('../product_client');

// mock class
jest.mock('../product_client');

describe('ProductService', () => {

    // mock function
    const fetchItems = jest.fn(async () => [
        {item: '🥛', available: true},
        {item: '🍌', available: false},
    ])

    // set mock function to the mockImplementation
    ProductClient.mockImplementation(() => {
        return {
            fetchItems, 
        }
    });
    let productService;

    beforeEach(() => {
        productService = new ProductService();
    })

    it('should filter out only available items', async () => {
        const items = await productService.fetchAvailableItems();
        expect(items).toHaveLength(1)
        expect(items).toEqual([{item: '🥛', available: true}]);
    });

    it('test', async () => {

        // jest config에 clearMocks를 true 설정했기 때문에 자동 초기화됨
        const items = await productService.fetchAvailableItems();
        expect(fetchItems).toHaveBeenCalledTimes(1);
    });
});