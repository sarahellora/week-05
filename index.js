class Band {
    constructor(name,genre){
      this.name = name;
      this.genre = genre;
    }
  
    describe () {
      return `${this.name} is ${this.genre}.`
    }
  }
  
  class Label {
    constructor(name){
      this.name = name;
      this.bands =[];
    }
  
    addBand(band){
      if (band instanceof Band) {
        this.bands.push(band);
      } else {
        throw new Error (`You can only add an instance of band. Argument is not a band: ${band}`);
      }
    }
    
    describe (){
      return `${this.name} has ${this.bands.length} bands.`;
    }
  }
  
  class Menu {
    constructor() {
      this.labels=[];
      this.selectedLabel = null;
    }
  
    start (){
      let selection = this.showMainMenuOptions();
      
      while (selection !=0){
        switch (selection) {
          case '1':
            this.createLabel();
            break;
          case '2':
            this.viewLabel();
            break;
          case '3':
            this.deleteLabel();
            break;
          case '4':
            this.displayLabel();
            break;
          default:
              selection = 0;
        }
  selection = this.showMainMenuOptions();
      }
  
      alert ("Goodbye!");
    }
  
    showMainMenuOptions() {
      return prompt (`
      0) exit
      1) create new label 
      2) view label
      3) delete label
      4) display all label
      `); 
    }
  
    showLabelMenuOptions(labelInfo){
      return prompt (`
      0) back
      1) create band 
      2) delete band
      --------------------
      ${labelInfo}
    `); 
  }
   
    displayLabel() {
      let labelString = '';
      for (let i=0; i< this.labels.length; i++){
        labelString += i + ')' + this.labels[i].name + '\n';
      }
      alert(labelString);
    }
  
    createLabel() {
      let name = prompt ('Enter name for new Label')
      this.labels.push(new Label(name));
    }
  
    viewLabel() {
      let index = prompt("Enter the index of the Label you wish to view:");
      if (index > -1 && index < this.labels.length) {
        this.selectedLabel = this.labels[index];
        let description = 'Label Name: ' + this.selectedLabel.name + '\n';
        
        for (let i = 0; i < this.selectedLabel.bands.length; i++) {
          description += i + ') ' + this.selectedLabel.bands[i].name
          + ' - ' + this.selectedLabel.bands[i].genre + '\n';
        }
      
        let selection = this.showLabelMenuOptions(description);
        switch (selection) {
          case '1': 
            this.createBand();
            break;
          case '2':
            this.deleteBand();
        }
      }  
    }
  
    deleteLabel(){
      let index= prompt ("Enter the index of the label you wish to delete")
      if (index >-1 && index < this.labels.length){
        this.labels.splice(index,1);
      }
    }
    createBand(){
      let name = prompt ('Enter Name for the new Band');
      let genre = prompt ('Enter genre for new Band:');
      this.selectedLabel.bands.push(new Band(name,genre));
    }
  
    deleteBand(){
      let index = prompt ('Enter the index of the Band you wish to delete:');
      if (index >-1 && index < this.selectedLabel.bands.length){
        this.selectedLabel.bands.splice(index,1);
      }
    }
  } 
  
  let menu = new Menu ();
  menu.start();
  