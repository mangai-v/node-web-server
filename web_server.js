
// const express = require('express')
// const app = express()
// const PORT = 3500
// const path = require('path')
// const logEvents = require('./middleware/logEvents')
// app.use((req,res,next)=>{
//     logEvents(`${req.method} ${req.headers.origin} ${req.url}`)
//     console.log(`${req.method} ${req.path}`);
//     next()
// })

// app.use(express.urlencoded({extended:false}))
// app.use(express.json())
// app.use(express.static(path.join(__dirname,'/public')))

// app.get('^/$|/index(.html)?',(req,res)=>{
//     // res.send("Hi Makkaley")
//     res.sendFile(path.join(__dirname,'views','index.html'))
// })
// app.get('/new-page(.html)?',(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','new-page.html'))
// })
// app.get('/old-page(.html)?',(req,res)=>{
//     res.redirect(301,'new-page.html')
// })
// app.get('/hello.html',(req,res,next)=>{
//     console.log('we are trying to call the next function here');
//     next()
// },(req,res)=>{
//     res.send('Hi hello makkaley')
// })
// const one = (req,res,next)=>{
//     console.log('One');
//     next()
// }
// const two = (req,res,next)=>{
//     console.log('two');
//     next()
// }
// const three =(req,res)=>{
//     console.log('three');
// }
// app.get('/chain.html',[one,two,three])
// app.get('/*',(req,res)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'))
// })
// app.listen(PORT,()=>{
//     console.log(`server is running on ${PORT}`);
// })

const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT||3500
const logEvents = require('./middleware/logEvents')
app.use(express.static(path.join(__dirname,'./public')))
app.use((req,res,next)=>{
    logEvents(`${req.method} ${req.headers.origin} ${req.url}`)
    console.log(`${req.method} ${req.path}`);
    next()
})

app.get('^/$|/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})
app.get('/new-page(.html)?',(req,res)=>{
   res.sendFile(path.join(__dirname,'views','new-page.html'))
})
app.get('/old-page(.html)?',(req,res)=>{
    res.redirect(301,'new-page.html')
})
app.get('/hello.html',(req,res,next)=>{
    console.log();('we are trying to call next function')
    next()
},(req,res)=>{
    res.send('hi hello makkale')
})
const one = (req,res,next)=>{
    console.log('one');
    next()
}
const two = (req,res,next)=>{
    console.log('two');
    next()
}
const three = (req,res)=>{
    console.log('three');
    
}
app.get('/chain(.html)?',[one,two,three])
app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})