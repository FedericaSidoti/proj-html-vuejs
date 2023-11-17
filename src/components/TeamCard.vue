<script>
export default {
    components: {
    },
    data() {
        return {  
        }
    },
    props: {
        member: Object
    }
} 
</script>

<template>
    <div class="card-body">
        <div class="wrap">
            <div class="member-wrap">
                <img class="member" :src="'/img/' + member.src">
            </div>
            <div class="quote">
                <img src="/img/quote.png">
            </div>
        </div>
        <div class="role">
            <span class="name">{{ member.name }}</span> 
            <span class="yllw-text">({{ member.role }})</span>
        </div>
        <p class="cit">"{{ member.cit }}"</p>
        
    </div>
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as * ; 

//layout card
.card-body{
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    text-align: center; 
    gap: 25px; 
}

.wrap {
    position: relative;
}
.member-wrap {
    aspect-ratio: 1; 
    background-color: $white;
    border-radius: 50%; 
    overflow: hidden; 
    padding: 2px; 
    border: 2px solid $yellow;  
}

//css elementi della card
.role {
    display: flex; 
    gap: 8px; 
}

.name {
    font-weight: 500; 
}

.quote {
    position : absolute; 
    aspect-ratio: 1;
    border-radius : 50%;
    background-color: $yellow ;
    padding: 6px 10px; 
    top: 0; 
    left: -8px; 
}
.cit {
    font-size: 15px; 
    color: gray; 
}

</style>