<template>
  <ul class="cards">
    <div v-for="graphic in $options.graphicData">
      <li class="cards_item">
        <div class="card">
          <div class="offset">
            <div class="card_image"><img :src="graphic.image"></div>
          </div>
          <div class="card_content">
            <p class="card_title">{{graphic.header}}</p>
            <p class="card_text">{{graphic.description}}</p>
            <div class="divider1"></div>
            <p class="card_updated">
              <v-icon class="v-icon mr-2 mdi mdi-clock-outline theme--light" small></v-icon>
              {{graphic.updated}}
            </p>
          </div>
        </div>
      </li>
    </div>
  </ul>
</template>

<script>
    import graphicImg1 from '../../assets/graphics/graphicImg1.png';
    import graphicImg2 from '../../assets/graphics/graphicImg2.png';
    import graphicImg3 from '../../assets/graphics/graphicImg3.png';

    export default {
        name: 'Graphics',
        graphicData: [
            {
                image: graphicImg1,
                header: 'Daily Sales',
                description: "increase in today's sales",
                updated: 'updated 4 minutes ago',
            },
            {
                image: graphicImg2,
                header: 'Email Subscription',
                description: "Last Campaign Performance",
                updated: 'updated 10 minutes ago',
            },
            {
                image: graphicImg3,
                header: 'Completed Tasks',
                description: "Last Last Campaign Performance",
                updated: 'campaign sent 26 minutes ago',
            },
        ],
    }
</script>


<style scoped lang="scss">
  img {
    padding: 0;
    min-height: 160px;
    max-width: 100% !important;
    border-radius: 6px;
    box-shadow: 0 12px 6px -6px #000000a6;
  }

  .cards {
    display: flex;
    flex-wrap: initial;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .cards_item {
    display: flex;
    padding: 10px;
    position: relative;
    width: 100%;
  }

  .card {
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    border: 1px solid #4242422e;
    display: flex;
    flex-direction: column;
  }

  .card_content {
    padding: 15px 20px 0;
    margin-top: -2em;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: self-start;
  }

  .card_title {
    color: rgba(0, 0, 0, .87);
    font-size: 18px !important;
    margin-bottom: 5px !important;
    font-family: "Roboto", sans-serif;
    font-weight: 300 !important;
  }

  .card_text {
    color: #999;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
  }

  .offset {
    top: -22px;
    position: relative;
    margin: 0 auto;
    max-width: calc(100% - 38px);
  }

  .divider1 {
    border: .3px solid #9999995c;
    width: 100%;
  }

  .card_updated {
    margin: 0 20px 0 0;
    padding: 10px 0 10px;
    line-height: 22px;
    font-size: 12px !important;
    color: #9e9e9e !important;

    p {
      margin-bottom: 0;
    }
  }

  @media (max-width: 990px) {
    .offset {
      width: 100% !important;
      img {
        width: 100%;
      }
    }
    .card {
      width: 100% !important;
      margin-bottom: 2em;
    }
    .cards {
      flex-direction: column;
    }
  }
</style>
