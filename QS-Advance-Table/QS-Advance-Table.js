define( ["qlik","jquery", "text!./style.css", "text!./template.html"], function (qlik, $, cssContent, template,ng ) {'use strict';
    $("<style>").html(cssContent).appendTo("head");
	
	var palette = [
        "#b0afae",
        "#7b7a78",
        "#545352",
        "#4477aa",
        "#7db8da",
        "#b6d7ea",
        "#46c646",
        "#f93f17",
        "#ffcf02",
        "#276e27",
        "#ffffff",
        "#000000"
    ];
	
	
	
	
	
	


	return {
       template: template,
       initialProperties : {
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 25,
					qHeight : 50
				}],
			}
		},
		
		definition : {
			type : "items",
			component : "accordion",
			items : {
				dimensions : {
					uses : "dimensions",
					min : 1,
							items:{
						 
								 colorExpression:{  
										   type: "string", 
                                          label: "Enter color expression", 
										  component: 'expression',
										  ref:"qAttributeExpressions.0.qExpression", 
                           					expression: "optional"
                                          
									}  
							}
			
					},
				
				measures : {
					uses : "measures",
					min : 0
					
				
				},
				sorting : {
					uses : "sorting"
				},
					settings : {
					uses : "settings",
					items : {
						initFetchRows : {
							ref : "qHyperCubeDef.qInitialDataFetch.0.qHeight",
							label : "Initial fetch rows",
							type : "number",
							defaultValue : 50
						}
					}
				},
				Tablestyling: {
					label:'Table Styling',
					items: {
						MyColorPicker: {
							label:"Table Background color",
							ref: "myColor",
							type: "string",
							defaultValue: "#ffffff",
							expression: "optional"
						},
						MyColor: {
							label:"Text-color",
							ref: "Color",
							type: "string",
							defaultValue: "#333333",
							expression: "optional"
						},
	
									Text_align : {
											ref : 'qTextAlign',
											label : 'Text Align',
											type : 'string',
											component : 'buttongroup',
											options: [ {
												value: 'left',
												label: 'Left'
											}, {
												value: 'center',
												label: 'Center'
											}, {
												value: 'right',
												label: 'Right'
											}],
											defaultValue: 'center'
										},
										Text_style : {
											ref : 'qTextStyle',
											label : 'Text Style',
											type : 'string',
											component : 'buttongroup',
											options: [ {
												value: 'normal',
												label: 'normal'
											}, {
												value: 'italic',
												label: 'italic'
											}, {
												value: 'oblique',
												label: 'oblique'
											}],
											defaultValue: 'normal'
										},
										
										
										Text_font_size : {
											ref : 'qTextFontsize',
											label : 'Data Font Size',
											type : 'number',
											defaultValue: 13,
											component: 'slider',
											min: 0,
											max: 40,
											step: 1
										},
									    tableoddcolor: {
														 type: "string",
														label: "Table row Odd color",
														ref: "tableoddcolor",
														defaultValue: "#ff",
														expression: "optional"
											},
										tableevencolor: {
												type: "string",
												label: "Table row Even color",
												ref: "tableevencolor",
												defaultValue: "#f2f2f2",
												expression: "optional"
											
								
										},
										
										
										paddingtop: {
															type: "number",
															component: "slider",
															label: "Padding Top",
															ref: "paddingtop",
															min: 0,
															max: 100,
															step: 1,
															defaultValue:5

														},
														paddingbottom: {
															type: "number",
															component: "slider",
															label: "Padding Bottom",
															ref: "paddingbottom",
															min: 0,
															max: 100,
															step: 1,
															defaultValue:5

														},
													headerpaddingright: {
															type: "number",
															component: "slider",
															label: "Padding Right",
															ref: "paddingright",
															min: 0,
															max: 100,
															step: 1,
															defaultValue:5

														},
														paddingleft: {
															type: "number",
															component: "slider",
															label: "Padding Left",
															ref: "paddingleft",
															min: 0,
															max: 100,
															step: 1,
															defaultValue:5

														},
														borderColor: {
															label:"border-color",
															ref: "ColorBorder",
															type: "string",
															defaultValue: "#333",
															expression: "optional"
														},
														
														
													
											
											
										
									}
								},
										
								TableHeaderStyle: {
										label:'Table Header Styling',
										items: {
												ColumnHeadercolor: {
													type: "string",
													label: "header background color",
													ref: "headerbgcolor",
													defaultValue: "#f2f2f2",
													expression: "optional"
												},
												Headercolor: {
													type: "string",
													label: "header Text color",
													ref: "qheadercolor",
													defaultValue: "#333",
													expression: "optional"
												},
										headerfontsize: {
													type: "number",
													component: "slider",
													label: "Header Font Size",
													ref: "headerfontsize",
													min: 10,
													max: 100,
													step: 1,
													defaultValue: 15

												},

														headerpaddingtop: {
															type: "number",
															component: "slider",
															label: "Header Padding Top",
															ref: "headerpaddingtop",
															min: 0,
															max: 100,
															step: 1,
															defaultValue:5

														},
														headerpaddingbottom: {
															type: "number",
															component: "slider",
															label: "Header Padding Bottom",
															ref: "headerpaddingbottom",
															min: 0,
															max: 100,
															step: 1,
															defaultValue:5

														},
														headerpaddingright: {
															type: "number",
															component: "slider",
															label: "Header Padding Right",
															ref: "headerpaddingright",
															min: 0,
															max: 100,
															step: 1,
															defaultValue:5

														},
														headerpaddingleft: {
															type: "number",
															component: "slider",
															label: "Header Padding Left",
															ref: "headerpaddingleft",
															min: 0,
															max: 100,
															step: 1,
															defaultValue:5

														},
														Textalign : {
															ref : 'TextAlign',
															label : 'Text Align',
															type : 'string',
															component : 'buttongroup',
															options: [ {
																value: 'left',
																label: 'Left'
															}, {
																value: 'center',
																label: 'Center'
															}, {
																value: 'right',
																label: 'Right'
															}],
															defaultValue: 'center'
														},
														
														Textstyle : {
															ref : 'TextStyle',
															label : 'Text Style',
															type : 'string',
															component : 'buttongroup',
															options: [ {
																value: 'normal',
																label: 'normal'
															}, {
																value: 'italic',
																label: 'italic'
															}, {
																value: 'oblique',
																label: 'oblique'
															}],
															defaultValue: 'normal'
														},
														

											
						
									}
								}
				
			}
		},
		support : {
			snapshot: true,
			export: true,
			exportData : true
		},
		

		
		
				  
				  
		paint: function ($element,layout) {
						
								 $element.css("background-color",layout.myColor);
								 $element.css("color", layout.Color);
								 $element.css("text-align",layout.qTextAlign);
								 $element.css("font-size",layout.qTextFontsize);
								  $element.css("font-style",layout.qTextStyle);
								  
								  
								  
								  
								  


								  var	tableevencolor = layout.tableevencolor,
										tableoddcolor = layout.tableoddcolor,
										headerbgcolor = layout.headerbgcolor,
										headerFontSize = layout.qheaderFontsize,
										headercolor = layout.qheadercolor,
										toppadding = layout.headerpaddingtop,
										bottompadding = layout.headerpaddingbottom,
										rightpadding = layout.headerpaddingright,
										leftpadding = layout.headerpaddingleft,
										fontweight = layout.customfont,
										textalign = layout.TextAlign,
										textStyle = layout.TextStyle,
										paddingtop =layout.paddingtop,
										paddingbottom = layout.paddingbottom,
										paddingright = layout.paddingright,
										paddingleft = layout.paddingleft,
										border = layout.ColorBorder,
										borderWidth = layout.borderfontsize;

										
				

								var basestyle = '';




									basestyle += ' tr:nth-child(even) {background: ' + tableevencolor + ' !important;}';

									//even
									basestyle += 'tr:nth-child(odd) {background: ' + tableoddcolor + ' ;}';
									//odd
									basestyle += 'th{background: ' + headerbgcolor + ' ;}';

									//header background color
									basestyle += 'th{color: ' + headercolor + ' ; font-size: ' + layout.headerfontsize + 'px;}\n';

									basestyle += 'th{padding-top: ' + toppadding + 'px ;}';
									basestyle += 'th{padding-bottom: ' + bottompadding + 'px ;}';
									basestyle += 'th{padding-right: ' + rightpadding + 'px ;}';
									basestyle += 'th{padding-left: ' + leftpadding + 'px ;}';
									basestyle += 'th{text-align: ' + textalign + ';}';
									basestyle += 'th{font-style : ' + textStyle + ';}';

									
									
									basestyle += 'td{padding-top: ' + paddingtop+ 'px ;}';
									basestyle += 'td{padding-bottom: ' + paddingbottom + 'px ;}';
									basestyle += 'td{padding-right: ' + paddingright + 'px ;}';
									basestyle += 'td{padding-left: ' + paddingleft + 'px ;}';
									
									basestyle += 'td{border-top: 1px solid ' + border  + ';}';
									basestyle += 'td{border-bottom:1px  solid ' + border  + ';}';
									basestyle += 'td{border-right: px solid ' + border  + ';}';
									basestyle += 'td{border-left: 1px solid ' + border  + ';}';
									
									
									
									
									
									
									
									
									
									


									$('<style></style>').html(basestyle).appendTo('head');
			
			
			
			
			
			
	
	
						

							if ( !this.$scope.table ) {
								this.$scope.table = qlik.table(this);

							}

							return qlik.Promise.resolve();

						},
		  
		 
			/*paint : function($element,layout){
	        		 $element.css("background-color", palette[layout.myColor]);
				 },*/
	
	
		
	};

} );
