module.exports = (sequelize, dataTypes) => {
    let alias = "Carts";
    let cols = {
        cart_item_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        item_id: {
            type: dataTypes.INTEGER,
        },
        numbers_items: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: "cart",
        timestamps: false 
    }

    const Cart = sequelize.define(alias, cols, config);
    
    return Cart;
}