var socket = io();

new Vue({
    el: '#mainSection',
    data: {
      customerInfo: [],
      email: "",
      fullname: "",
      gender: "Undisclosed",
      payment: "",
      burgers: food,
      checkedBurgers: [],
      orderButtonIsClicked: false,
      orders: {},
      coordinates: {x: -20, y: -20},
      orderId: "",
      count: 0
    },
    methods: {
        orderBurgers: function (){
          this.orderButtonIsClicked = true

          this.customerInfo = []
          this.customerInfo.push({value: "Fullname: " + this.fullname})
          this.customerInfo.push({value: "Email: " + this.email})
          this.customerInfo.push({value: "Payment: " + this.payment})
          this.customerInfo.push({value: "Gender: " + this.gender})
          this.customerInfo.push({value: "Order: " + this.checkedBurgers})

          socket.emit("addOrder", { orderId: this.count++,
                                    details: { x: this.coordinates.x,
                                               y: this.coordinates.y},
                                    orderItems: this.checkedBurgers,
                                    customerInfo: ["Fullname: " + this.fullname, " Email: " + this.email, " Payment: " + this.payment, " Gender: " + this.gender]
                                  });
          return
        },
        displayOrder: function (event) {
          let offset = {x: event.currentTarget.getBoundingClientRect().left,
                        y: event.currentTarget.getBoundingClientRect().top }
          this.coordinates =    {x: event.clientX - 10 - offset.x,
                                 y: event.clientY - 10 - offset.y }

      },
    }
});
