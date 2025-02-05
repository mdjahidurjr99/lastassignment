const { DecodeToken } = require("../utility/tokenHelper");

const AuthMiddleware = async (req, res, next) => {
    try {
        let token = req.headers['token'];
        if (!token) {
            return res.status(401).json({ status: "fail", message: "Unauthorized" });
        }

        let decoded = DecodeToken(token);
        if (!decoded) {
            return res.status(401).json({ status: "fail", message: "Unauthorized" });
        }

        // Attach user_id to the request headers
        req.headers['user_id'] = decoded.user_id;
        next();
    } catch (e) {
        return res.status(500).json({ status: "fail", message: e.message });
    }
};

module.exports = AuthMiddleware;



// const { DecodeToken } = require("../utility/tokenHelper");

// module.exports = function (req, res, next) {
//     let token = req.headers["token"] || req.cookies["token"];

//     if (!token) {
//         return res.status(401).json({ status: "fail", message: "Unauthorized" });
//     }

//     let decoded = DecodeToken(token);
//     if (decoded === null) {
//         return res.status(401).json({ status: "fail", message: "Unauthorized" });
//     } else {
//         let email = decoded["email"];
//         let user_id = decoded["user_id"];

//         req.headers.email = email;
//         req.headers.user_id = user_id;

//         next();
//     }
// };
