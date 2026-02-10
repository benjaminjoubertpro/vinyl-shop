// ---------------------------------------------------------------------------
// useCart.js — Gestion du panier
//
// C'est quoi ce fichier ?
//   → Une fonction réutilisable qui gère le panier d'achat.
//   → On peut l'appeler depuis n'importe quelle page ou composant.
//   → Le panier est sauvegardé dans le navigateur (localStorage),
//     donc il reste même si on recharge la page.
//
// Comment l'utiliser dans un composant ?
//   import { useCart } from '~/composables/useCart'
//   const { cart, addToCart, totalItems } = useCart()
// ---------------------------------------------------------------------------

// ref()      = crée une variable réactive (Vue la surveille et met à jour l'affichage)
// computed() = crée une valeur calculée automatiquement (se recalcule quand ses données changent)
// watch()    = surveille une variable et exécute du code quand elle change
import { ref, computed, watch } from 'vue'

// Le panier — c'est un tableau qui contient les articles ajoutés.
// Il est déclaré ICI (en dehors de la fonction) pour être partagé
// entre toutes les pages qui utilisent useCart().
const cart = ref([])

// Cette variable empêche de charger localStorage plusieurs fois
let dejaCharge = false

export function useCart() {

    // ---- 1. Charger le panier sauvegardé dans le navigateur ----
    // On ne le fait qu'une seule fois (au premier appel)
    // import.meta.client = vrai seulement dans le navigateur (pas côté serveur)
    if (dejaCharge === false && import.meta.client) {
        // Lire ce qui est stocké dans le navigateur
        const sauvegarde = localStorage.getItem('vinyl-cart')

        // Si on a trouvé quelque chose, on le met dans le panier
        if (sauvegarde) {
            cart.value = JSON.parse(sauvegarde)
        }

        dejaCharge = true
    }

    // ---- 2. Sauvegarder le panier à chaque changement ----
    // watch() surveille "cart". Dès qu'il change, on sauvegarde.
    // { deep: true } = surveiller aussi les changements à l'intérieur du tableau
    if (import.meta.client) {
        watch(cart, function (nouveauPanier) {
            localStorage.setItem('vinyl-cart', JSON.stringify(nouveauPanier))
        }, { deep: true })
    }

    // ---- 3. Nombre total d'articles ----
    // Exemple : 2 Thriller + 1 Nevermind = 3 articles
    const totalItems = computed(function () {
        let total = 0
        for (let i = 0; i < cart.value.length; i++) {
            total = total + cart.value[i].quantity
        }
        return total
    })

    // ---- 4. Prix total du panier ----
    // Exemple : Thriller (29.99 x 2) + Nevermind (25.90 x 1) = 85.88
    const totalPrice = computed(function () {
        let total = 0
        for (let i = 0; i < cart.value.length; i++) {
            total = total + (cart.value[i].price * cart.value[i].quantity)
        }
        return total
    })

    // ---- 5. Ajouter un produit au panier ----
    // Si le produit est déjà dans le panier → on augmente la quantité de 1
    // Sinon → on l'ajoute avec une quantité de 1
    function addToCart(product) {
        // Chercher si ce produit est déjà dans le panier
        let articleExistant = null
        for (let i = 0; i < cart.value.length; i++) {
            if (cart.value[i].id === product.id) {
                articleExistant = cart.value[i]
            }
        }

        if (articleExistant) {
            // Le produit est déjà là → on ajoute 1 à la quantité
            articleExistant.quantity = articleExistant.quantity + 1
        } else {
            // Nouveau produit → on l'ajoute au tableau
            cart.value.push({
                id: product.id,
                slug: product.slug,
                title: product.title,
                artist: product.artist,
                price: product.price,
                image: product.image,
                quantity: 1
            })
        }
    }

    // ---- 6. Modifier la quantité d'un article ----
    // Si la nouvelle quantité est 0 ou moins → on supprime l'article
    function updateQuantity(productId, nouvelleQuantite) {
        if (nouvelleQuantite <= 0) {
            // Quantité à 0 → on supprime
            removeFromCart(productId)
            return
        }

        // Chercher l'article et changer sa quantité
        for (let i = 0; i < cart.value.length; i++) {
            if (cart.value[i].id === productId) {
                cart.value[i].quantity = nouvelleQuantite
            }
        }
    }

    // ---- 7. Supprimer un article du panier ----
    // On crée un nouveau tableau SANS l'article à supprimer
    function removeFromCart(productId) {
        let nouveauPanier = []
        for (let i = 0; i < cart.value.length; i++) {
            if (cart.value[i].id !== productId) {
                nouveauPanier.push(cart.value[i])
            }
        }
        cart.value = nouveauPanier
    }

    // ---- 8. Vider tout le panier ----
    function clearCart() {
        cart.value = []
    }

    // ---- 9. Retourner tout ce dont les composants ont besoin ----
    return {
        cart,
        totalItems,
        totalPrice,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart
    }
}
