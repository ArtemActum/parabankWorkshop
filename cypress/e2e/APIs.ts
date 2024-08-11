describe('Restful Booker API Tests', () => {
    let authToken: string;
    let bookingId: string;

    it('Health Check', () => {
      cy.request({
        method: 'GET',
        url: 'https://restful-booker.herokuapp.com/ping',
      }).then((response) => {
        expect(response.status).to.equal(201);
      });
    })

    it('Request token', () => {
        cy.request({
          method: 'POST',
          url: 'https://restful-booker.herokuapp.com/auth',
          body: {
            username: 'admin',
            password: 'password123',
          },
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('token');
          authToken = response.body.token;
        });
      })

      it('Create booking', () => {
        cy.request({
          method: 'POST',
          url: 'https://restful-booker.herokuapp.com/booking',
          body: {
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        },
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('bookingid');
          bookingId = response.body.bookingid;
        });
      })

      
    it('Get BookingIds', () => {
      cy.request({
        method: 'GET',
        url: 'https://restful-booker.herokuapp.com/booking',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
      });
    });

    it('Get Booking by ID', () => {
      cy.request({
        method: 'GET',
        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.firstname).to.eq("Jim");
        expect(response.body.lastname).to.eq("Brown");
      });
    }); 

      it('Update Booking', () => {
        cy.request({
          method: 'PUT',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          body: {
            "firstname" : "James",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        },
        headers: {
            Cookie: `token=${authToken}`
        }
        }).then((response) => {
          expect(response.status).to.equal(200);
        });
      })

      it('Partial Update Booking', () => {
        const partialUpdatedBookingData = {
          totalprice: 3000,
        };
        cy.request({
          method: 'PATCH',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          body: partialUpdatedBookingData,
          headers: {
            Cookie: `token= ${authToken}`,
            Authorisation: `Bearer ${authToken}`
          },
        }).then((response) => {
          expect(response.status).to.equal(200);
        });
      });

      it('Delete Booking', () => {
        cy.request({
          method: 'DELETE',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          headers: {
            Cookie: `token=${authToken}`
        }
        }).then((response) => {
          expect(response.status).to.equal(201);
        });
      })
})