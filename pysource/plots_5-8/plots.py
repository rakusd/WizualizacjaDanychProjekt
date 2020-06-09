import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

sns.set_style('whitegrid')

# WYKRES 5 - Odwrócona oś X - The High Demand For Technical Talent

X = np.arange(2011, 2021)
Y1 = np.arange(0, 1400001, 1400000 / (len(X) - 1), dtype=int)
Y2 = np.arange(0, 400001, 400000 / (len(X) - 1), dtype=int)
title = 'The High Demand For Technical Talent'
labels = ['400000 \nComputer Science Students',
        '1,4 miliona \nComputing Jobs']

# incorrecy plot
fig, ax = plt.subplots()
ax.stackplot(X, Y2, Y1 - Y2, labels=labels, colors=['purple', 'goldenrod'])
ax.ticklabel_format(axis='y', style='plain')
ax.set_axisbelow(True)
ax.xaxis.grid(False)
ax.yaxis.tick_right()
ax.text(x = X[Y2.argmax()] - 0.3, y = 0.20 * Y2[Y2.argmax()], s = labels[0], 
        fontdict={'fontsize' : 12, 'fontweight' : 'bold', 'color' : 'white'})
ax.text(x = X[Y2.argmax()] - 0.3, y = 0.45 * Y1[Y1.argmax()], s = labels[1], 
        fontdict={'fontsize' : 12, 'fontweight' : 'bold', 'color' : 'white'})
plt.title(title, fontdict={'fontsize' : 16, 'fontweight' : 'bold'})
plt.xticks(X)
plt.gca().invert_xaxis()
plt.savefig('plot_5_incorrect.svg')
plt.show()

# correct plot
fig, ax = plt.subplots()
ax.stackplot(X, Y2, Y1 - Y2, labels=labels, colors=['purple', 'goldenrod'])
ax.ticklabel_format(axis='y', style='plain')
ax.set_axisbelow(True)
ax.xaxis.grid(False)
ax.yaxis.tick_right()
ax.text(x = X[Y2.argmax()] - 4, y = 0.05 * Y2[Y2.argmax()], s = labels[0], 
        fontdict={'fontsize' : 12, 'fontweight' : 'bold', 'color' : 'white'})
ax.text(x = X[Y2.argmax()] - 3, y = 0.45 * Y1[Y1.argmax()], s = labels[1], 
        fontdict={'fontsize' : 12, 'fontweight' : 'bold', 'color' : 'white'})
plt.title(title, fontdict={'fontsize' : 16, 'fontweight' : 'bold'})
plt.xticks(X)
plt.savefig('plot_5_correct.svg')
plt.show()

# WYKRES 6 - niepoprawne kolory - Shoe color frequency
X = np.array(['White', 'Blue', 'Yellow', 'Black', 'Red', 'Grey', 'Brown'])
Y = np.array([6, 2, 3, 12, 1, 5, 1])
data = pd.DataFrame({'X' : X, 'Y' : Y})
title = 'Shoe color frequency'

# incorrect plot
Colors = np.array(['red', 'black', 'grey', 'blue', 'brown', 'white', 'yellow'])
fig, ax = plt.subplots()
ax.bar(data['X'], data['Y'], color=Colors, edgecolor='black')
ax.set_xlabel('Color')
ax.set_ylabel('Number')
ax.set_axisbelow(True)
ax.yaxis.grid(color='grey')
ax.set_title(title, fontdict={'fontsize' : 16, 'fontweight' : 'bold'})
plt.savefig('plot_6_incorrect.svg')
plt.show()

# correct plot
Colors = np.char.lower(X)
data['Colors'] = Colors
data = data.sort_values(by=['Y'], ascending=False)
fig, ax = plt.subplots()
ax.bar(data['X'], data['Y'], color=data['Colors'], edgecolor='black')
ax.set_xlabel('Color')
ax.set_ylabel('Number')
ax.set_axisbelow(True)
ax.yaxis.grid(color='grey')
ax.set_title(title, fontdict={'fontsize' : 16, 'fontweight' : 'bold'})
plt.savefig('plot_6_correct.svg')
plt.show()

# WYKRES 7 - różne sklale na osiach Y - 

X = pd.date_range('2010-01-01','2014-12-01', freq='MS').strftime("%B %Y").tolist()
Y_sale = np.random.normal(180000, 250000, len(X))
Y_profit = np.random.normal(20000, 40000, len(X))

# WYKRES 8 - nieadekwatne stosunki pól do wartości etykiet
X = [1997, 1999, 2001, 2002, 2003, 2004, 2006, 2007, 2007, 2008]
Y = [200, 115, 125, 94, 94, 150, 225, 300, 150, 185]
Z = [1.84, 0.92, 0.98, 0.93, 1.12, 0.92, 1.07, 0.96, 0.94, 0.95]
Names = ['Titanic', 'Star Wars: Episode I – The Phantom Menace', 'Harry Potter and the Philosopher\'s Stone',
            'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King',
            'Shreck 2', 'Pirates of the Caribbean: Dead Man\'s Chest',
            'Pirates of the Caribbean: At World\'s End',
            'Harry Potter and the Order of the Phoenix', 'The Dark Knight']
title = 'Top 10 films by Worldwide Grosses'
Y_ticks = np.arange(0, 401, 100)

# Incorrect plot
fig = plt.figure(figsize=(12,8))
scatter = plt.scatter(X, Y, s=2000 * np.pi * np.square(Z), alpha=0.5, c=np.arange(1, 11))
handles, labels = scatter.legend_elements(prop="colors")
ax = plt.subplot()
box = ax.get_position()
ax.set_position([box.x0, box.y0 + box.height*0.35, box.width, box.height*0.65])
plt.legend(handles, Names,
          loc='upper center', bbox_to_anchor=(0.5, -0.1),
          fancybox=True, shadow=True, ncol=2)
plt.title(title, fontdict={'fontsize' : 16, 'fontweight' : 'bold'})
plt.xticks(np.arange(1996, 2010))
plt.yticks(Y_ticks, ['$' + str(x) + 'M' for x in Y_ticks])
plt.ylabel('Production Budget')
plt.grid(True)
plt.savefig('plot_8_incorrect.svg')
plt.show()

# Correct plot
fig = plt.figure(figsize=(12,8))
scatter = plt.scatter(X, Y, s= np.array(Z, dtype=float) * 2000 * np.pi, alpha=0.5, c=np.arange(1, 11))
handles, labels = scatter.legend_elements(prop="colors")
ax = plt.subplot()
box = ax.get_position()
ax.set_position([box.x0, box.y0 + box.height*0.35, box.width, box.height*0.65])
plt.legend(handles, Names,
          loc='upper center', bbox_to_anchor=(0.5, -0.1),
          fancybox=True, shadow=True, ncol=2)
plt.title(title, fontdict={'fontsize' : 16, 'fontweight' : 'bold'})
plt.xticks(np.arange(1996, 2010))
plt.yticks(Y_ticks, ['$' + str(x) + 'M' for x in Y_ticks])
for x, y, z, in zip(X, Y, Z):
    lab = '$' + str(z) + 'B'
    plt.text(x - (len(lab) / 20), y - 0.5, lab, fontdict={'fontsize' : 10, 'fontweight' : 'bold', 'color' : 'black'} )
plt.ylabel('Production Budget')
plt.grid(True)
plt.savefig('plot_8_correct.svg')
plt.show()