const rp = {
    
    fiel:(req, res)=>{
        res.render('index')
    },
    fiel1:(req, res)=>{
        res.render('about')
    },
    fiel2:(req, res)=>{
        res.render('service')
    },
    fiel3:(req, res)=>{
        res.render('contact')
    },
    fiel4:(req, res)=>{
        res.render('home')
    }
};

module.exports = rp;