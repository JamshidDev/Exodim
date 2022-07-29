<template >
  <div
    class="
      login_container
      w-full
      min-h-screen
      overflow-hidden
      flex
      justify-content-center
      align-items-center
    "
  >
  <div class="question_btn">
       <Button icon="pi pi-question-circle" class="p-button-rounded p-button-text p-button-lg" v-tooltip="'Yordam'" />
  </div>
    <div class="grid sm:px-3 px-4 xl:px-0 lg:px-0 md-px-0" style="max-width:500px" >
    <div class="col-12  flex
      flex-column pb-6">
        <img class="login_logo mx-auto" src="https://railway.uz/local/templates/main_v2/img/logo.webp" alt="">
    </div>
      <div class="col-12 pb-4">
        <h3 class="text-white text-center uppercase font-medium">
          Tizimga kirish
        </h3>
      </div>
      <div class="col-12">
        <InputText type="text" class="w-full" v-model.trim="users.login"  placeholder="Login kiriting" />
      </div>
      <div class="col-12">
          <Password
            v-model="users.password"
            placeholder="Parol kiriting"
            toggleMask
            class="w-full mb-3"
            inputClass="w-full"
            :feedback="false"
          ></Password>

      </div>
      <div class="col-12">
        <Button label="Kirish" icon="pi pi-enter" iconPos="left" class="w-full" :loading="loading" @click="login()" />
          
      </div>
      <div class="col-12">
         <Toast />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: {
        login: null,
        password: null,
      },
      loading:false
    };
  },
  methods:{
    login(){
        
        this.loading = !this.loading;
        setTimeout(()=>{
            this.loading = !this.loading;
              this.$toast.add({severity:'error', summary: "Tizimga kirish", detail:"Login yoki parol noto'g'ri", life: 3000});
           
        }, 2000)
    }
  }
};
</script>
<style scoped lang="scss">
.login_container {
  background: linear-gradient(
    89.97deg,
    #152340 0.03%,
    #324877 50%,
    #152340 99.98%
  );

  & .login_logo {
    max-width: 80px;
    height: auto !important;
    height: auto;
  }
}

::v-deep(.p-password input) {
  width: 15rem;
}
.login_logo{
    height: 70px;
}
.question_btn{
    position: absolute;
    right: 20px;
    top: 20px;
}
</style>