<template>
  <div>
    <div class="about_us">
      <h2>Our Company</h2>
      <div class="mission">
        <span>MISSION</span>
        <p>
          Our mission is to design and implement effective innovations while
          providing the highest level of customer support.
        </p>
      </div>
      <span>Name</span>
      <p>
        Company’s name is Unlimited Technology. Located in Khichapokhari,
        Kathmandu, Nepal.
      </p>
      <span>Our Commitment</span>
      <p>
        As a leader in the global security systems and software, low voltage
        systems, managed services, cyber security, converged networks , Audio
        Visual sectors, Unlimited Technology, provides reliable solutions that
        utilize the latest state-of-the-art technologies for our clients. We
        take the time to work with each client and recommend the right solutions
        to meet our client’s needs.
      </p>
      <p>
        We offer a wide range of security related services to our national and
        international clients. From employing security vulnerability assessments
        to doing a complete and exhaustive customized system fabrication, you
        can count on Unlimited Technology to be responsive, professional and
        reliable. Our complete turnkey project management service provides
        clients everything from initial project ideas to full execution and
        ongoing maintenance. Additionally, we take the time to make certain our
        clients are well informed and regularly updated.
      </p>
      <p>
        Whether your electronic security needs are related to critical
        infrastructure, corporate, utility, manufacturing, education,
        transportation, healthcare, defense, government, pharmaceutical,
        construction or retail our engineers will make certain your system is
        properly integrated and designed. Additionally, we provide ongoing
        technical support and field services. Our remote capabilities allow our
        customer support center to monitor and adjust systems on an as needed
        basis.
      </p>
      <span>edheba superApp</span>
      <p>
        e-dheba is a digital financial service that provides interest on all the
        money one has in its account and provides its services in four major
        pillars: Savings and credit services; remittance services; payment
        services and SuperServices. e-dheba offer under the Savings and Credit
        Services thru its sister concern Imperial Savings and Credit Cooperative
        Ltd and from its partner organization Citizen Bank International Ltd",
        savings accounts, get online credit facilities for buying products in
        EMI, and getting micro loans including insurance services. Users will be
        able to send remittances currently from all the countries in European
        Union thru its sister concern Lalit Money Transfer P Ltd. Having merged
        with iPay Pvt Ltd, we are now able to offer payment services for mobile,
        internet, telephone, television, electricity, school, airlines, water,
        bus services, etd. In the SuperApp services, edheba provides taxi, two
        wheeler ride sharing, food order from restaurants, groceries and 50+
        other services like plumber, carpenter, mason, electrician, home tutor,
        etc.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.about_us {
  display: block;
  width: 100%;
  min-height: 60vh;
  background: #fff;
  color: #000;
  text-align: justify;
  position: relative;
  padding: 150px 10% 50px 10%;
}

.about_us > h2 {
  display: block;
  color: #000;
  font-size: 32px;
  line-height: 31px;
  letter-spacing: 1px;
  font-weight: 700;
  margin: 0 auto 30px;
}

.about_us > span {
  display: block;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.75;
  margin: 20px auto 10px;
}

.about_us > p {
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
  margin: 0 auto 10px;
}

.about_us > img {
  display: block;
  margin-bottom: 20px;
}

.about_us > .mission {
  color: #000;
  display: blcok;
  width: 60%;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: rgba(92, 188, 224, 0.4);
  margin-left: 20%;
  padding: 5px 10px;
}

.about_us > .mission > span {
  display: block;
  margin: 0 auto 10px;
  font-size: x-large;
  text-align: center;
  font-weight: 500;
  line-height: 1.75;
}
.about_us > .mission > p {
  display: block;
  color: #000;
  margin: 0 auto 10px;
  text-align: center;
  font-weight: 500;
  line-height: 1.75;
}
</style>
