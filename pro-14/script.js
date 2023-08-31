let Api = "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T0RnM05UazFMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuQUpfMmVpN3ZZMHFnMnQ1R3liWjRFdDhCY05zbzdKY3JPSGlUd2hPSjEwVm9aSnYzVkRUZmx2aGpOX1ZVZGRza2h1VnBvU2t5cDZEeEwwWHBycGFJNGc=";

// الخطوه الاولي
async function firsteb() {
  let data = {
    api_key: Api,
  };
  let request = await fetch("https://accept.paymob.com/api/auth/tokens", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  let respon = await request.json();
  let token = respon.token;
  secondsteb(token);
}

// الخطوه التانيه
async function secondsteb(token) {
  let data = {
    auth_token: token,
    delivery_needed: "false",
    amount_cents: "100",
    currency: "EGP",
    items: [],
  };
  let request = await fetch(" https://accept.paymob.com/api/ecommerce/orders", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  let respon = await request.json();
  let id = respon.id;
  sthirdsteb(token, id);
}

// الخطوه لتالته
async function sthirdsteb(token, id) {
  let data = {
    auth_token: token,
    amount_cents: "100",
    expiration: 3600,
    order_id: id,
    billing_data: {
      apartment: "803",
      email: "claudette09@exa.com",
      floor: "42",
      first_name: "Clifford",
      street: "Ethan Land",
      building: "8028",
      phone_number: "+86(8)9135210487",
      shipping_method: "PKG",
      postal_code: "01898",
      city: "Jaskolskiburgh",
      country: "CR",
      last_name: "Nicolas",
      state: "Utah",
    },
    currency: "EGP",
    integration_id: 4137934,
  };

  let request = await fetch(
    "https://accept.paymob.com/api/acceptance/payment_keys",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  let respon = await request.json();
  let tokenres = respon.token ; 
  cardpayment(tokenres );
}


async function cardpayment(tokenres) {
    let iframes = `https://accept.paymob.com/api/acceptance/iframes/784111?payment_token=${tokenres}`
    location.href = iframes; 
}

firsteb();
