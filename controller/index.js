
const get = async (req, res, next) => {
    try {
        const results = await service.getAllOrders();
        res.json({
            status: 'success',
            code: 200, 
            data: {
                orders: results,
            }
        });
    } catch (err) {
        console.error(err);
        next(err);
    };
};

const getById = async(req, res, next) => {
    const { id } = req.params;

    try {
        const result = await service.getOrderById(id);

        if(result) {
            res.json({
                status: 'success',
                code: 200,
                data: {order: result},
            });
        } else {
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `Not found task id: ${id}`,
                data: 'Not found',
            });
        };
    } catch (err) {
        console.log(err);
        next(err);
    };
};

const create = async(req, res, next) => {
    const { order } = req.body;

    try {
        const result = await service.create(order);

        if(result) {
            res.json({
                status: 'success',
                code: 201,
                data: {newOrder: result},
            });
        } else {
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `Error creating a new order`,
                data: 'Not created',
            });
        };
    } catch (err) {
        console.log(err);
        next(err);
    };
};

const update = async(req, res, next) => {
    const { id } = req.params;
    const { data } = req.body;

    try {
        const result = await service.update(id, data);

        if(result) {
            res.json({
                status: 'success',
                code: 201,
                data: {updatedOrder: result},
            });
        } else {
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `Not found task id: ${id}`,
                data: 'Not found',
            });
        };
    } catch (err) {
        console.log(err);
        next(err);
    };
};

const remove = async(req, res, next) => {
    const { id } = req.params;

    try {
        const result = await service.findOneAndRemove(id);

        if(result) {
            res.json({
                status: 'success',
                code: 200,
                data: {removedOrder: result},
            });
        } else {
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `Not found task id: ${id}`,
                data: 'Not found',
            });
        };
    } catch (err) {
        console.log(err);
        next(err);
    };
};

const getItems = async (req, res, next) => {
    try {
        const results = await service.getAllItems();
        res.json({
            status: 'success',
            code: 200, 
            data: {
                items: results,
            }
        });
    } catch (err) {
        console.error(err);
        next(err);
    };
};

module.exports = {
    get,
    getById,
    create,
    update,
    remove,
    getItems,
}