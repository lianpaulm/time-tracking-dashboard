const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

const container = document.querySelector('.record');

dailyBtn.addEventListener('click', getDailyTracker);
weeklyBtn.addEventListener('click', getWeeklyTracker);
monthlyBtn.addEventListener('click', getMonthlyTracker);

window.addEventListener('DOMContentLoaded', getDailyTracker);

async function getDailyTracker() {
  try {
    const data = await fetch('http://localhost:5000/api/daily');
    const timeFrame = await data.json();

    const daily = timeFrame.map((item) => {
      const cssClass = item.title.split(' ').join('').toLowerCase();

      return ` <div class="item box ${cssClass}">
          <div class="content">
            <div class="top">
              <p class="title">${item.title}</p>
              <div class="ellipsis"></div>
            </div>
            <div class="bottom">
              <h2 class="current">${item.current}hrs</h2>
              <p class="previous">Last Week - ${item.previous}hrs</p>
            </div>
          </div>
        </div> `;
    });
    container.innerHTML = daily.join('');
  } catch (error) {
    console.log(error);
  }
}

// weekly
async function getWeeklyTracker() {
  try {
    const data = await fetch('http://localhost:5000/api/weekly');
    const timeFrame = await data.json();

    const weekly = timeFrame.map((item) => {
      const cssClass = item.title.split(' ').join('').toLowerCase();
      return ` <div class="item box ${cssClass}">
          <div class="content">
            <div class="top">
              <p class="title">${item.title}</p>
              <div class="ellipsis"></div>
            </div>
            <div class="bottom">
              <h2 class="current">${item.current}hrs</h2>
              <p class="previous">Last Week - ${item.previous}hrs</p>
            </div>
          </div>
        </div> `;
    });
    container.innerHTML = weekly.join('');
  } catch (error) {
    console.log(error);
  }
}

// monthly
async function getMonthlyTracker() {
  try {
    const data = await fetch('http://localhost:5000/api/monthly');
    const timeFrame = await data.json();

    const monthly = timeFrame.map((item) => {
      const cssClass = item.title.split(' ').join('').toLowerCase();
      return ` <div class="item box ${cssClass}">
          <div class="content">
            <div class="top">
              <p class="title">${item.title}</p>
              <div class="ellipsis"></div>
            </div>
            <div class="bottom">
              <h2 class="current">${item.current}hrs</h2>
              <p class="previous">Last Week - ${item.previous}hrs</p>
            </div>
          </div>
        </div> `;
    });
    container.innerHTML = monthly.join('');
  } catch (error) {
    console.log(error);
  }
}
