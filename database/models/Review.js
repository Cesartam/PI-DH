module.exports = (sequelize, dataTypes) => {
    let alias = "Reviews"
    let cols = {
        review_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
        username: {
            type: dataTypes.STRING,
        },
        review: {
            type: dataTypes.STRING,
        },
        score: {
            type: dataTypes.INTEGER,
        },
        img: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "reviews",
        timestamps: false 
    }
    const Review = sequelize.define(alias, cols, config);
    
    return Review;
}