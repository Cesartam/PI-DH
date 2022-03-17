module.exports = (sequelize, dataTypes) => {
    let alias = "Users"
    let cols = {
        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        user_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        img: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "users",
        timestamps: false 
    }
    const User = sequelize.define(alias, cols, config);
    
    return User;
}