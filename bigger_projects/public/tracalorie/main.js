//Storage Controller
const StorageCtrl = (function(){
    //public methods
    return {
        storeItem: function(item){
            let items;
            //check for items
            if(localStorage.getItem('items') === null){
                items = [];
                //push new item
                items.push(item);
                
                //set LS
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                items = JSON.parse(localStorage.getItem('items'));
                
                //push new item
                items.push(item);
                
                 //reset LS
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemsFromStorage: function(){
            let items;
            if(localStorage.getItem('items') === null){
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        updateItemStorage: function(updatedItem){
            let items = JSON.parse(localStorage.getItem('items'));
            
            items.forEach(function(item, index){
                if(updatedItem.id === item.id){
                    items.splice(index, 1, updatedItem);
                }
            });
             localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItemFromStorage: function(id){
            let items = JSON.parse(localStorage.getItem('items'));
            
            items.forEach(function(item, index){
                if(id === item.id){
                    items.splice(index, 1);
                }
            });
             localStorage.setItem('items', JSON.stringify(items));
        },
        clearItemsFromStorage: function(){
            localStorage.removeItem('items');
        }
    };   
})();




//Item Controller
const ItemCtrl = (function(){
    //Item Constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    };
    
    //Data structure / State
    const data = {
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
    };
    
    // Public methods
    return {
        getItems: function(){
            return data.items;
        },
        addItem: function(name, calories){
            let ID;
            // create id
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            //Calories to number
            calories = parseInt(calories);
            
            //create new item
            const newItem = new Item(ID, name, calories);
            
            //add to items array
            data.items.push(newItem);
            
            return newItem;
        },
        getItemById: function(id){
            let found = null;
            //loop through items
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            });
            return found;
        },
        updateItem: function(name, calories){
            //calories to number
            calories = parseInt(calories);
            
            let found = null;
            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        deleteItem: function(id){
            //get ids
            const ids = data.items.map(function(item){
                return item.id;
            });
            
            //get index
            const index = ids.indexOf(id);
            
            //remove item
            data.items.splice(index, 1);
        },
        clearAllItems: function(){
            data.items = [];
        },
        setCurrentItem: function(item){
            data.currentItem = item;
        },
        getCurrentItem: function(){
          return data.currentItem;  
        },
        getTotalCalories: function() {
            let total = 0;
            
            //loop through and add calories
            data.items.forEach(function(item){
                total += item.calories;
            });
            
            //set total calories
            data.totalCalories = total;
            
            //return total
            return data.totalCalories;
        },
        logData: function logData(){
            return data;
        }
    };
})();




//UI Controller
const UICtrl = (function(){
    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    };
    
    // Public methods
    return {
        populateItemList: function(items){
            let html = '';
            items.forEach(function(item){
                html += `
                <li id="item-${item.id}" class="collection-item">
                    <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                </li>
                `;
            });
            //insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function(){
          return {
              name: document.querySelector(UISelectors.itemNameInput).value,
              calories: document.querySelector(UISelectors.itemCaloriesInput).value
          };  
        },
        addListItem: function(item){
            //show list
            document.querySelector(UISelectors.itemList).style.display = 'block';
            
            //create li element
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`;
            
            //add html
            li.innerHTML = `
                    <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                    `;
                    
            //insert item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        updateListItem: function(item){
            let listItems = document.querySelectorAll(UISelectors.listItems);
            
            //turn node list into array
            listItems = Array.from(listItems);
            
            listItems.forEach(function(listItem){
                const itemID = listItem.getAttribute('id');
                
                if(itemID === `item-${item.id}`){
                    document.querySelector(`#${itemID}`).innerHTML = `
                    <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                    `;
                }
            });
        },
        deleteListItem: function(id){
          const itemID = `#item-${id}`;
          const item = document.querySelector(itemID);
          
          item.remove();
        },
        clearInput: function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        adItemToForm: function(){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        removeItems: function(){
            let listItems = document.querySelectorAll(UISelectors.listItems);
            
            //turn node list to an array
            listItems = Array.from(listItems);
            
            listItems.forEach(function(item){
                item.remove();
            });
        },
        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';  
        },
        showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function(){
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';  
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';  
            document.querySelector(UISelectors.backBtn).style.display = 'none';  
            document.querySelector(UISelectors.addBtn).style.display = 'inline';  
        },
        showEditState: function(){
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';  
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';  
            document.querySelector(UISelectors.backBtn).style.display = 'inline';  
            document.querySelector(UISelectors.addBtn).style.display = 'none';  
        },
        getSelectors: function(){
            return UISelectors;
        }
    };
})();




//App Controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl){
    // Load Event LIsteners
    const loadEventListeners = function(){
        //get selectors object from UICtrl
        const UISelectors = UICtrl.getSelectors();
    
        //add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
        
        //disable submit on enter
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }
        });
        
        // edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
        
        //update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
        
         //back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', function(e){
            UICtrl.clearEditState();
            e.preventDefault();
        });
        
        //delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
        
        //clear all items event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
            
            
           
        
    };
    
    //Add item submit
    const itemAddSubmit = function(e){
        // Get form input from UICtrl
        const input = UICtrl.getItemInput();
        
        //check if nothing is entered
        if(input.name !== '' && input.calories !== ''){
            //add item to list
            const newItem = ItemCtrl.addItem(input.name, input.calories);
            
            //add item to ui list
            UICtrl.addListItem(newItem);
            
            //get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            
            //show calories
            UICtrl.showTotalCalories(totalCalories);
            
            //Store in local Storage
            StorageCtrl.storeItem(newItem);
            
            //clear form fields
            UICtrl.clearInput();
        }
        
        e.preventDefault();
    };
    
    //Click edit item
    const itemEditClick = function(e){
        if(e.target.classList.contains('edit-item')){
            const listId = e.target.parentNode.parentNode.id;
            
            //break into an array
            const listIdArray = listId.split('-');
            
            //get actual id
            const id = parseInt(listIdArray[1]);
            
            //get item
            const itemToEdit = ItemCtrl.getItemById(id);
            
            //set current item
            ItemCtrl.setCurrentItem(itemToEdit);
            
            //add item to form
            UICtrl.adItemToForm();
        }
        
        
        e.preventDefault();
    };
    
    
    //update item
    const itemUpdateSubmit = function(e){
        //get item input
        const input = UICtrl.getItemInput();
        
        //update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
        
        //update UI with new info
        UICtrl.updateListItem(updatedItem);
        
        //get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        
        //show calories
        UICtrl.showTotalCalories(totalCalories);
        
        //update local storage
        StorageCtrl.updateItemStorage(updatedItem);
        
        UICtrl.clearEditState();
        
        e.preventDefault();
    };
    
    //delete 
    const itemDeleteSubmit = function(e){
        const currentItem = ItemCtrl.getCurrentItem();
        
        //delete from data structure
        ItemCtrl.deleteItem(currentItem.id);
        
        //delete from UI
        UICtrl.deleteListItem(currentItem.id);
        
        //get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        
        //show calories
        UICtrl.showTotalCalories(totalCalories);
        
        //delete from local storage
        StorageCtrl.deleteItemFromStorage(currentItem.id);
        
        UICtrl.clearEditState();
        
        e.preventDefault();
    };
    //clear items event
    const clearAllItemsClick = function(){
        //delete all from data structure
        ItemCtrl.clearAllItems();
        
         //get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        
        //show calories
        UICtrl.showTotalCalories(totalCalories);
        
        //remove from UI
        UICtrl.removeItems();
        
        //clear from LS
        StorageCtrl.clearItemsFromStorage();
        
        //hide ul
        UICtrl.hideList();
        
        
    };
    // Public methods
    return {
      init: function(){
          //set initial state
          UICtrl.clearEditState();
          
         //fetch items from data structure
          const items = ItemCtrl.getItems();
          
          //Check if any items
          if(items.length === 0){
              UICtrl.hideList();
          } else {
              //populate list with items
              UICtrl.populateItemList(items);
          }
          
         //get total calories
         const totalCalories = ItemCtrl.getTotalCalories();
        
         //show calories
         UICtrl.showTotalCalories(totalCalories);
          
          // Load event listeners
          loadEventListeners();
      }  
    };
})(ItemCtrl, StorageCtrl, UICtrl);

//Initialize app
App.init();