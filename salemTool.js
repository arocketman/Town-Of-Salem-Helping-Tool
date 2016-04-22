var vue = new Vue({
  el: '#app',
  data: {
    selected: 'A',
    myStack: [],
    options: [
      { text: 'Jailor', value: 'Jailor' },
      { text: 'Investigator', value: 'TownInvestigative' },
      { text: 'Lookout', value: 'TownInvestigative' },
      { text: 'Sheriff', value: 'TownInvestigative' },
      { text: 'Spy', value: 'TownInvestigative' },
      { text: 'Escort', value: 'TownSupport' },
      { text: 'Mayor', value: 'TownSupport' },
      { text: 'Medium', value: 'TownSupport' },
      { text: 'Retributionist', value: 'TownSupport' },
      { text: 'Transporter', value: 'TownSupport' },
      { text: 'Bodyguard', value: 'TownProtective' },
      { text: 'Vampire Hunter', value: 'TownKilling' },
      { text: 'Vigilante', value: 'TownKilling' },
      { text: 'Veteran', value: 'TownKilling' },
      { text: 'Godfather', value: 'Godfather' },
      { text: 'Mafioso', value: 'Mafioso' },
      { text: 'Blackmailer', value: 'RandomMafia' },
      { text: 'Consigliere', value: 'RandomMafia' },
      { text: 'Consort', value: 'RandomMafia' },
      { text: 'Disguiser', value: 'RandomMafia' },
      { text: 'Forger', value: 'RandomMafia' },
      { text: 'Framer', value: 'RandomMafia' },
      { text: 'Janitor', value: 'RandomMafia' },
      { text: 'Arsonist', value: 'NeutralKilling' },
      { text: 'Serial Killer', value: 'NeutralKilling' },
      { text: 'Werewolf', value: 'NeutralKilling' },
      { text: 'Executioner', value: 'NeutralEvil' },
      { text: 'Jester', value: 'NeutralEvil' },
      { text: 'Witch', value: 'NeutralEvil' },
      { text: 'Amnesiac', value: 'NeutralBenign' },
      { text: 'Survivor', value: 'NeutralBenign' },
    ]
  },
  methods: {
  	sortBy : function(e){
  		value = e.target.selectedOptions[0].value;
  		switch (value) {
  			case "Jailor":
  				this.check($('#Jailor'));
  			break;
  			case "TownInvestigative":
  				if(!this.isChecked($('#TownInvestigative')))
  					this.check($('#TownInvestigative'));
  				else if(!this.isChecked($('#TownInvestigative2')))
  					this.check($('#TownInvestigative2'));
  				else if(!this.isChecked($('#RandomTown')))
  					this.check($('#RandomTown'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			case "TownSupport":
  				if(!this.isChecked($('#TownSupport')))
  					this.check($('#TownSupport'));
  				else if(!this.isChecked($('#TownSupport2')))
  					this.check($('#TownSupport2'));
  				else if(!this.isChecked($('#RandomTown')))
  					this.check($('#RandomTown'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			break;
  			case "TownKilling":
				if(!this.isChecked($('#TownKilling')))
  					this.check($('#TownKilling'));
  				else if(!this.isChecked($('#RandomTown')))
  					this.check($('#RandomTown'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			case "TownProtective":
				if(!this.isChecked($('#TownProtective')))
  					this.check($('#TownProtective'));
  				else if(!this.isChecked($('#RandomTown')))
  					this.check($('#RandomTown'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;  				
  			case "Godfather":
  				this.check($('#Godfather'));
  			break;
  			case "Mafioso":
  				this.check($('#Mafioso'));
  			break;
  			case "RandomMafia":
  				this.check($('#RandomMafia'));
  			break;
  			case "NeutralKilling":
  				if(!this.isChecked($('#NeutralKilling')))
  					this.check($('#NeutralKilling'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			break;
  			case "NeutralEvil":
  				if(!this.isChecked($('#NeutralEvil')))
  					this.check($('#NeutralEvil'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			break;
  			case "NeutralBenign":
  				if(!this.isChecked($('#NeutralBenign')))
  					this.check($('#NeutralBenign'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			break;
  			break;
  			default:
  				// statements_def
  				break;
  		}
  	},

  	isChecked : function(elem){
      return ! (elem).is(':visible');
  	},

  	check : function (elem){
  		vue.myStack.push(elem.closest('tr')[0]);

   		(elem).closest('tr').children('td')
        .wrapInner('<div />')
        .children()
        .slideUp(function() { $(this).closest('tr').hide(); });
  	},

  	uncheck : function(elem){
  		popped = $(vue.myStack.pop()).show().find('*').slideDown(function(){
  			$(this).show();
  		});
  		
  	}

  }
})

$(document).ready(function(){

for(var i = 0; i < 8; i++){
	$('#suspectsList').append(i+'-\n');
	$('#suspectsList2').append((i+8)+'-\n');
}

});

$('tr td p').on('click',function(){
	console.log($(this).parentElement);
	if($(this).css('text-decoration') == 'line-through')
		vue.$options.methods.uncheck($(this));
	else
		vue.$options.methods.check($(this));

})