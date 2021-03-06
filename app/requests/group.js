const yup = require('yup');

const rules = yup.object().shape({
    name: yup.string().required(),
    //created_by: yup.string(),
   // group_leader: yup.string(),
    description: yup.string().required()
});

const validate = (req, res, next) => {
    const valid = rules.validate(req.body, {abortEarly: false})
        .catch(errors => {
            const schemaErrors = errors.inner.map(err => {
                return {field: err.path, message: err.message};
            });
            return res.status(422).json({
                errors: schemaErrors,
            });
        });
};


module.exports = {
    validate
};
