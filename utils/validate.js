exports.validateRequest = (req, res, next) => {
    const errors = validationResult(req) 
    console.log(errors)
    if(errors.isEmpty()){  // errors가 비어있다면
        return next()
    }
    // error가 있다면
    return res.status(400).json({message: errors.array()})
}