// Live clock in Irvine time (America/Los_Angeles).
// Updates every element with .js-clock-time and sets
// data-period="am" | "pm" on every .status-dot.

(function () {
  const timeEls = document.querySelectorAll(".js-clock-time");
  const dots = document.querySelectorAll(".status-dot");

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  function tick() {
    const parts = formatter.formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const period = get("dayPeriod").toLowerCase(); // "am" or "pm"
    const text = `${get("hour")}:${get("minute")}:${get("second")} ${period.toUpperCase()}`;

    timeEls.forEach((el) => (el.textContent = text));
    dots.forEach((dot) => (dot.dataset.period = period));
  }

  tick();
  setInterval(tick, 1000);
})();
