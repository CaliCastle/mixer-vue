<template>
    <div class="w-screen h-screen">
        <div class="absolute pin bg-black opacity-75"></div>
        <div class="flex flex-col justify-center w-full h-full" v-if="showInstructions">
            <div class="mx-auto relative" instructions-menu>
                <main class="h-auto bg-black">
                    <header class="mx-auto relative" logo>
                        <img src="https://vvspaceship.website/wp-content/uploads/2018/08/Jake-title-edit-compressed.png">
                    </header>
                    <h1 class="intro text-center text-white leading-loose">
                        Welcome to WE ARE JAKE! A mixer exclusive sports brawler
                    </h1>
                    <div class="pc-controls w-full mx-auto my-3">
                        <img src="https://vvspaceship.website/wp-content/uploads/2018/08/controls-compressed.png">
                    </div>
                    <div class="instruction-buttons mt-2 flex w-full">
                        <button class="instruction-button join" @click.prevent="join">
                            <p>
                                Let's play!
                                <img src="https://vvspaceship.website/wp-content/uploads/2018/08/A-enter.png">
                            </p>
                        </button>
                        <button class="instruction-button dismiss" @click.prevent="watch">
                            <p>
                                I'll watch
                                <img src="https://vvspaceship.website/wp-content/uploads/2018/08/leave.png">
                            </p>
                        </button>
                        <div class="clear"></div>
                    </div>
                </main>
            </div>
        </div>
        <div class="w-full h-full flex justify-center items-center" v-else>
            <h2 class="text-white text-3xl font-bold">
                {{ message }}
            </h2>
        </div>
        <div class="cursor-pointer absolute" @click.prevent="toggleInstructions" help>
            <label class="help-label inline-block text-xl text-white pr-3 align-top">Help</label>
            <img class="help-image inline-block"
                 src="https://vvspaceship.website/wp-content/uploads/2018/08/HelpImages.png">
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        showInstructions: true,
        message: ""
      };
    },
    methods: {
      join() {
        this.showInstructions = false;
        this.message = "Perfect! Let's Join!";
      },
      watch() {
        this.showInstructions = false;
        this.message = "Fine, Keep Watching!";
      },
      toggleInstructions() {
        this.showInstructions = !this.showInstructions;
      }
    }
  };
</script>

<style lang="scss" scoped>
    [instructions-menu] {
        width: 60%;
        max-width: 600px;

        > main {
            border: 10px solid #50d1fc;
            border-radius: 100px;
            box-shadow: 10px 10px 0 #3482ee, 20px 20px 0 #2b64e8;
            padding: 30px 60px;
            transform: rotate(3deg);

            [logo] {
                width: 60%;
                max-width: 300px;
            }

            .intro {
                font-size: 2vw;
            }

            .pc-controls {
                max-width: 400px;
            }

            .instruction-button {
                background: #000;
                color: #fff;
                font-size: 1vw;
                text-align: center;
                border: 3px solid #fff;
                margin: 0 2%;
                border-radius: 50px;
                box-shadow: 0 0 0 #000, 0 0 0 #000;
                opacity: 1;
                transition: box-shadow .2s, opacity .2s;
                appearance: none;
                padding: .75rem;

                &.join {
                    flex: 5;
                }

                &.dismiss {
                    flex: 4;
                    opacity: .5;
                }

                &:hover {
                    box-shadow: 5px 5px 0 red, -5px -5px 0 #50d1fc;
                    opacity: 1;
                }

                img {
                    height: 20px;
                    margin-bottom: -3px;
                    margin-left: 10px;
                }
            }
        }
    }

    [help] {
        left: 20%;
        bottom: .75rem;

        label {
            -webkit-text-stroke: .35px #000;
        }
    }
</style>