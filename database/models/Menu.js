module.exports = (sequelize, dataTypes) => {
    let alias = "Menus"
    let cols = {
        item_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
        item: {
            type: dataTypes.STRING,
        },
        type: {
            type: dataTypes.STRING,
        },
        price: {
            type: dataTypes.INTEGER,
        },
        description: {
            type: dataTypes.STRING,
        },
        image: {
            type: dataTypes.STRING
        },
        score: {
            type: dataTypes.INTEGER
        },
        discount: {
            type: dataTypes.INTEGER
        },
        boughts: {
            type: dataTypes.INTEGER
        },
        dish: {
            type: dataTypes.STRING
        },
        isTopPlate: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "menu",
        timestamps: false 
    }
    const Menu = sequelize.define(alias, cols, config);
    
    return Menu;
}