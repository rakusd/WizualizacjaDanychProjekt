# %%
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('data.csv')
df

# %%
import matplotlib.pyplot as plt
import numpy as np

# Intended to serve something like a global variable
class MyClass:
    i = -1

def func(pct, labels, vals):
    MyClass.i +=1
    # Returns absolute value against the default percentage
    # absolute = int(pct/100.*np.sum(vals))
    # Combine labels and values
    return f"{df.percentage[MyClass.i]}%\n{df.date[MyClass.i]}"


fig1, ax1 = plt.subplots()
# Pie wedgeprops with width being the donut thickness
ax1.pie(df.percentage, autopct=lambda pct: func(pct, [], []),
        shadow=True, startangle=135, explode = [0.1, 0.1, 0.1])
        
ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.title('AMERICANS WHO HAVE TRIED MARIJUANA')
plt.text(0.6, -1.2, 'Source: MOE +/- 4%')
plt.savefig('base.png', dpi = 150,
            bbox_inches = 'tight')

# %%
