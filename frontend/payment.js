class Payment {
    process() {
        console.log("Processing payment");
    }
}

class CreditCardPayment extends Payment {
    process() {
        console.log("Processing credit card payment");
    }
}

class PayPalPayment extends Payment {
    process() {
        console.log("Processing PayPal payment");
    }
}

class BankTransferPayment extends Payment {  // Unnecessary subclass
    process() {
        console.log("Processing bank transfer payment");
    }
}

class MobilePayment extends Payment {  // Unnecessary subclass
    process() {
        console.log("Processing mobile payment");
    }
}

class CashPayment extends Payment {  // Unnecessary subclass
    process() {
        console.log("Processing cash payment");
    }
}

const mobilePayment = new MobilePayment();
mobilePayment.process(); // Processing mobile payment
