var goodData={

    //路径导航
    path:[
        {
            title:"手机、数码、通讯",
            url:'###'
        },{
            title:"手机",
            url:'###'
        },{
            title:"Apple苹果",
            url:'###'
        },{
            title:"iphone 6S系",
        }
    ],

    //左侧缩略图路径
    imagessrc:[
        {s:"images/s1.jpg"}, 
        {s:"images/s2.jpg"},
        {s:"images/s3.jpg"},
        {s:"images/s4.jpg"},
        {s:"images/s5.jpg"},
        {s:"images/s6.jpg"},
        {s:"images/s7.jpg"},

    ],

    //右侧商品详情信息
    goodsDetail:{
        title:'花呗分期Apple/苹.果6s plus正品苹.果6s手机6sp全网通7代7plus7P',
        tip:'在确认收货 15 天内，如有商品质量问题、描述不符或未收到货等，您有权申请退款或退货，来回邮费由卖家承担。',
        price:5399,
        promoteSale:{
            type:"加价购",
            content:'满500 减50，满5999元 减800元，满6699元 减900元，满7999元 减1100元 即可在购物车换购热销商品！'

        },
        support:'以旧换新，闲置手机回收 4G套餐超值抢',
        evaluateNum:670000,
        address:'福建省 福州市 福清市',

        //参数选择
        crumbData:[
            //参数1：颜色
            {
                title:'选择颜色',
                data:[
                    {
                        type:'金色',
                        changePrice:0
                    },
                    {
                        type:'银色',
                        changePrice:40
                    },
                    {
                        type:'黑色',
                        changePrice:30
                    },
                    {
                        type:'蓝色',
                        changePrice:70
                    }
                    
                ]
            },
            //参数2：内存
            {
                title:"内存容量",
                data:[
                    {
                        type:'32G',
                        changePrice:0
                    },
                    {
                        type:'64G',
                        changePrice:200
                    },
                    {
                        type:'128G',
                        changePrice:400
                    },
                    {
                        type:'256G',
                        changePrice:700
                    }
                ]
            },

            //参数3：购买方式
            {
                title:"购买方式",
                data:[
                    {
                        type:'公开版',
                        changePrice:0
                    },
                    {
                        type:'移动版',
                        changePrice:300
                    },
                ]
            } ,
            //参数4：版本
            {
                title:"选择版本",
                data:[
                    {
                        type:'官方标配',
                        changePrice:0
                    },
                    {
                        type:'优惠移动版',
                        changePrice:100
                    },
                    {
                        type:'电信优惠版',
                        changePrice:100
                    }
                ]

            } 
        ]

    }


}